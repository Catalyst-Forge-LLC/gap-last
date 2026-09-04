import {
  looksLikeReconstructionMarkdown,
  parseReconstructionMarkdown,
  sectionOrderErrors,
} from "./parse.js";
import { renderReconstruction, renderSkeleton } from "./render.js";
import {
  coerceReconstruction,
  formatValidationErrors,
  validateReconstruction,
  validateUnknown,
} from "./validate.js";
import type { Reconstruction, ValidationResult } from "./types.js";

export interface ProcessResult {
  kind: "reconstruction" | "skeleton";
  reconstruction: Reconstruction;
  markdown: string;
  validation: ValidationResult;
  orderErrors: string[];
}

function looksLikeJson(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.startsWith("{") && trimmed.endsWith("}");
}

export function processInput(text: string): ProcessResult {
  const trimmed = text.trim();
  if (looksLikeJson(trimmed)) {
    const parsed: unknown = JSON.parse(trimmed);
    const reconstruction = coerceReconstruction(parsed);
    const validation = validateUnknown(parsed);
    const markdown = renderReconstruction(reconstruction);
    return {
      kind: "reconstruction",
      reconstruction,
      markdown,
      validation,
      orderErrors: [],
    };
  }

  if (looksLikeReconstructionMarkdown(trimmed)) {
    const orderErrors = sectionOrderErrors(trimmed);
    const reconstruction = parseReconstructionMarkdown(trimmed);
    const validation = validateReconstruction(reconstruction);
    return {
      kind: "reconstruction",
      reconstruction,
      markdown: renderReconstruction(reconstruction),
      validation,
      orderErrors,
    };
  }

  const reconstruction = renderSkeleton(trimmed);
  return {
    kind: "skeleton",
    reconstruction,
    markdown: renderReconstruction(reconstruction),
    validation: validateReconstruction(reconstruction),
    orderErrors: [],
  };
}

export function processOk(result: ProcessResult): boolean {
  return result.validation.ok && result.orderErrors.length === 0;
}

export function processFailureMessage(result: ProcessResult): string {
  const parts: string[] = [];
  if (result.orderErrors.length > 0) {
    parts.push(result.orderErrors.join("\n"));
  }
  if (!result.validation.ok) {
    parts.push(formatValidationErrors(result.validation));
  }
  return parts.join("\n");
}
