// Flips and inverts an image matrix
function flipAndInvertImage(image: number[][]): number[][] {
    let invertedImage: number[][] = image;

    // Iterate through all row matrices
    for (let i = 0; i < invertedImage.length; i++) {
        let matrix = invertedImage[i]; // Each row matrix
        matrix.reverse(); // Invert the matrix first of all

        // For each element / bit, flip it
        for (let j = 0; j < matrix.length; j++) {
            matrix[j] = matrix[j] == 0 ? 1 : 0;
        }
    }

    return invertedImage;
}
