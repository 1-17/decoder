export const encryptEntries = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
}

export const decryptEntries = Object.fromEntries(Object.entries(encryptEntries).map(([key, value]) => [value, key]))
