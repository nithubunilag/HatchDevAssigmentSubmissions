function flipImage(image: number[][]): number[][] {
    const numRows = image.length;
    const numCols = image[0].length;

     // Create a new matrix to store the flipped image
    const flippedImage: number [][] = []

    // Iterate through each row of the original image
    for (let i = 0; i< numRows; i++) {
        const newRow: number[] = [];

        // Iterate through each column of the original image in reverse order
        for (let j = numCols - 1; j >= 0; j--){
            newRow.push(image[i][j])
        }

        // Add the new row to the flipped image matrix
        flippedImage.push(newRow);
    }

    return flippedImage
}    

// Define the 2D array
const originalImage: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Image:");
console.log(originalImage);

const flippedImage = flipImage(originalImage);

console.log("Flipped Image:");
console.log(flippedImage);

