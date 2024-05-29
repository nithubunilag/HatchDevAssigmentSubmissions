// flip an image horizontally
function flipImageHorizontally(matrix: number[][]): number[][] {
    return matrix.map(row => row.reverse());
  }
  
  //flip an image vertically
  function flipImageVertically(matrix: number[][]): number[][] {
    return matrix.reverse();
  }
  
  //display the matrix
  function displayMatrix(matrix: number[][]): void {
    matrix.forEach(row => console.log(row.join(' ')));
  }
  
  
  const imageMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log("Original Image:");
  displayMatrix(imageMatrix);
  
  const horizontallyFlippedImage = flipImageHorizontally(imageMatrix);
  console.log("\nHorizontally Flipped Image:");
  displayMatrix(horizontallyFlippedImage);
  
  const verticallyFlippedImage = flipImageVertically(imageMatrix);
  console.log("\nVertically Flipped Image:");
  displayMatrix(verticallyFlippedImage);
  