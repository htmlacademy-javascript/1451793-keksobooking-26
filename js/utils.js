function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return Number(result.toFixed(digits));
}

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function formatCoordinates(objectCoordinates, digits = 5) {
  return `${objectCoordinates.lat.toFixed(digits)}, ${objectCoordinates.lng.toFixed(digits)}`;
}

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomArrayElement,
  formatCoordinates,
};
