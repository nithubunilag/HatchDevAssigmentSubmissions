function flipAndInvertImage(image: number[][]): number[][] {
  return image.map((row) =>
    row.reverse().map((value) => (value === 0 ? 1 : 0))
  );
}

const image1 = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
const image2 = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
];

console.log(flipAndInvertImage(image1));
console.log(flipAndInvertImage(image2));
