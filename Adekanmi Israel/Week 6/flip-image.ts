function flipAndInvertImage(image: number[][]) {
    let flippedImage: number[][] = []; // Initialize an array to hold the flipped image
  
    // Iterate over each row of the original image
    for (let i: number = 0; i < image.length; i++) {
      let flippedRow: number[] = []; // Initialize an array to hold the flipped row
  
      // Iterate over each element in the row
      for (let j: number = 0; j < image[i].length; j++) {
        // Reverse and invert each element and push it to the flipped row
        if (image[i][j] === 0) {
          flippedRow.unshift(1);
        } else {
          flippedRow.unshift(0);
        }
      }
      
      flippedImage.push(flippedRow); // Add the flipped row to the flipped image
    }
  
    return flippedImage; // Return the flipped image
  }
  
  console.log(flipAndInvertImage([
    [1, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 0, 0, 1],
  ]));
  