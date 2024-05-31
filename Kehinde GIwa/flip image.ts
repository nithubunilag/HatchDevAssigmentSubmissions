const image = [
  [1, 1, 0],
  [0, 1, 1],
  [1, 0, 1],
];
const reverse = image.map((element) => element.reverse());
const flip = reverse.map((element) =>
  element.map((elements) => (elements === 0 ? 1 : 0))
);
