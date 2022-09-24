export const createNumberArray = (n) => {
  return [...Array(n).keys()].map((i) => i + 1);
};
