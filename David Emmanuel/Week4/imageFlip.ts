function flipAndInvertImage(image: number[][]): number[][] {
    return image.map(row => row.reverse().map(i => 1 - i));
}

function displayImage(image: number[][]) {
    for (let row of image) {
        console.log('[', row.join(' '), ']')
    }
    console.log();
}

const image1: number[][] = [
    [1, 1, 0],
    [0, 1, 0]
]
console.log("Test Case 1");
displayImage(image1);
displayImage(flipAndInvertImage(image1));

const image2: number[][] = [
    [1, 1, 0],
    [0, 1, 0]
]
console.log("Test Case 2");
displayImage(image2);
displayImage(flipAndInvertImage(image2));