function flipAndInvertImage(image: number[][]): number[][] {
    // Iterate through each row of the image array
    for (let row of image) {
        // Reverse the row
        row.reverse();
        // Invert each element in the row
        for (let i = 0; i < row.length; i++) {
            row[i] = row[i] === 0 ? 1 : 0;
        }
    }
    return image;
}

const image: number[][] = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 1, 1]
];

console.log(flipAndInvertImage(image));
