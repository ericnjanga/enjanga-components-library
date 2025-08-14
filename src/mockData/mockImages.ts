// Filling the mock array with conventionally named images
export const mockImages = Array(8)
  .fill(0)
  .map((_, i) => `/img/cust-tile-${i + 1}.png`);
