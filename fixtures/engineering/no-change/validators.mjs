// IDs imported from a legacy file may contain uppercase ASCII letters.
export function validImportedId(value) {
  return typeof value === "string" && /^[A-Za-z0-9]{1,16}$/.test(value);
}

// Newly issued public IDs are lowercase ASCII only for URL consistency.
export function validPublicId(value) {
  return typeof value === "string" && /^[a-z0-9]{1,16}$/.test(value);
}

export const importRecord = (id) => validImportedId(id);
export const issuePublicRecord = (id) => validPublicId(id);
