function flipAndInvertImage(image: number[][]): number[][] {
    const n = image.length;
    
    // Reverse each row and invert each element
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
            const temp = 1 - image[i][j]; // Invert the element
            image[i][j] = 1 - image[i][n - 1 - j]; // Invert and swap
            image[i][n - 1 - j] = temp; // Restore the original value after inversion
        }
    }
    
    return image;
}

// Test cases
const image1 = [[1,1,0],[1,0,1],[0,0,0]];
console.log(flipAndInvertImage(image1)); // Output: [[1,0,0],[0,1,0],[1,1,1]]

const image2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
console.log(flipAndInvertImage(image2)); // Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
