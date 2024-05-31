function flipImage(image: number[][]): number[][] {
  const numOfRows = image.length;
  const numOfCols = image[0].length;

  const flippedImage: number[][] = [];

  for (let i = 0; i < numOfRows; i++) {
    flippedImage[i] = [];

    for (let j = 0; j < numOfCols; j++) {
      flippedImage[i][j] = image[i][numOfCols - j - 1];
    }
  }

  return flippedImage;
}

// Example usage
const originalImage: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Original Image:");
console.log(originalImage);

const flippedImage = flipImage(originalImage);

console.log("Flipped Image:");
console.log(flippedImage);
