#!/usr/bin/env node
/**
 * Copy the skill catalog's packs to the site static tree and STORE ZIPs.
 * Import syncSkills for checks with an isolated output directory.
 */
import {
  cpSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir).sort()) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let j = 0; j < 8; j++) {
      c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
    }
  }
  return (c ^ 0xffffffff) >>> 0;
}

function writeStoreZip(entries, destPath) {
  const locals = [];
  const centrals = [];
  let offset = 0;

  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name, "utf8");
    const crc = crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0, 6);
    local.writeUInt16LE(0, 8);
    local.writeUInt16LE(0, 10);
    local.writeUInt16LE(0, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    local.writeUInt16LE(0, 28);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0, 8);
    central.writeUInt16LE(0, 10);
    central.writeUInt16LE(0, 12);
    central.writeUInt16LE(0, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBuf.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36);
    central.writeUInt32LE(0, 38);
    central.writeUInt32LE(offset, 42);

    locals.push(local, nameBuf, data);
    centrals.push(central, nameBuf);
    offset += local.length + nameBuf.length + data.length;
  }

  const centralStart = offset;
  const centralSize = centrals.reduce((n, b) => n + b.length, 0);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralSize, 12);
  eocd.writeUInt32LE(centralStart, 16);
  eocd.writeUInt16LE(0, 20);

  writeFileSync(destPath, Buffer.concat([...locals, ...centrals, eocd]));
}

export function syncSkills({ root = repositoryRoot, outputDir = join(root, "site", "static", "skills") } = {}) {
  const catalog = JSON.parse(readFileSync(join(root, "skills", "catalog.json"), "utf8"));
  // Validate the entire catalog before changing any existing bundle.
  const names = new Set();
  for (const { name, requiredMembers } of catalog) {
    if (!/^[a-z0-9-]+$/.test(name) || names.has(name)) throw new Error(`Invalid skill name: ${name}`);
    names.add(name);
    for (const member of requiredMembers) {
      const skillRoot = resolve(root, "skills", name);
      const full = resolve(skillRoot, member);
      const fromSkill = relative(skillRoot, full);
      if (isAbsolute(fromSkill) || fromSkill.startsWith("..") || !statSync(full, { throwIfNoEntry: false })?.isFile()) {
        throw new Error(`Missing or invalid skill member: ${name}/${member}`);
      }
    }
  }
  const outputRoot = resolve(outputDir);
  mkdirSync(outputRoot, { recursive: true });
  for (const { name } of catalog) {
    const skillSrc = join(root, "skills", name);
    const destination = resolve(outputRoot, name);
    if (dirname(destination) !== outputRoot) throw new Error("Skill destination escaped output directory");
    rmSync(destination, { recursive: true, force: true });
    cpSync(skillSrc, destination, { recursive: true });
    const zipEntries = walk(skillSrc).map((full) => ({
      name: `${name}/${relative(skillSrc, full).replace(/\\/g, "/")}`,
      data: readFileSync(full),
    }));
    writeStoreZip(zipEntries, join(outputRoot, `${name}.zip`));
  }
  return catalog.map(({ name }) => name);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) syncSkills();
