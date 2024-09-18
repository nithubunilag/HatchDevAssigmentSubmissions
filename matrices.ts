function flipImage(image: number[][]): number[][] {
    const flippedImage: number[][] = [];

    for (let row of image) {
        flippedImage.push(row.slice().reverse());
    }

    return flippedImage;
}


const originalImage: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Image:");
console.log(originalImage);

const flippedHorizontally = flipImage(originalImage);
console.log(flippedHorizontally);


