function flipAndInvertImage(image: number[][]): number[][] {
    const n = image.length;
    for (let row = 0; row < n; row++) {
        // Reverse the row
        image[row].reverse();
        // Flip the values
        for (let col = 0; col < n; col++) {
            image[row][col] = image[row][col] === 1 ? 0 : 1;
        }
    }
    return image;
}

// Example usage:
const example1 = [[1,1,0],[1,0,1],[0,0,0]];
console.log(flipAndInvertImage(example1)); // Output: [[1,0,0],[0,1,0],[1,1,1]]

const example2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
console.log(flipAndInvertImage(example2)); // Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]