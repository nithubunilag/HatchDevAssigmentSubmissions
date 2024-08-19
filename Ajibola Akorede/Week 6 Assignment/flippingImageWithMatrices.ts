

function flipAnInvertImage(image: number[][]): number[][] {
    // Create an array to hold all nested arrays
    const ans: number[][] = [];

    // Iterate over the array
    for (let i = 0; i < image.length; i++) {
        // Create a temporary variable to hold the reversed and inversed nested array
        const tempArray: number[] = [];
        // Iterate over the nested array
        for (let j = 0; j < image[i].length; j++) {
            // Invert the value (0 to 1, 1 to 0) and add it to the tempArray
            tempArray.unshift(image[i][j] === 0 ? 1 : 0);
        }
        // Push the inverted and reversed array to the result array
        ans.push(tempArray);
    }
    return ans;
}


const inputImage: number[][] = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
];

console.log(flipAnInvertImage(inputImage));
