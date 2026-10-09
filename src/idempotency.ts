export function normalizeKey(key: string): string {
  // NFKC unifica formas Unicode equivalentes; \p{Cf} remove invisíveis como U+200B, que o trim não pega.
  return key.normalize("NFKC").replace(/\p{Cf}/gu, "").trim().toLowerCase();
}
