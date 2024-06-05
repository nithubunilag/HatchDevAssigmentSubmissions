const inputImage = [
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 0],
]

function flipImage(image: number[][]): number[][] {
    const o = image.length;
    const result: number[][] = [];

    for (let i = 0; i < o; i++) {
        const flippedRow = [...image[i]].reverse();
        result.push(flippedRow);
    }
    return result;
}

const flippedImage = flipImage(inputImage);
console.log(("Flipped Image :")); 
console.log(flippedImage); 
