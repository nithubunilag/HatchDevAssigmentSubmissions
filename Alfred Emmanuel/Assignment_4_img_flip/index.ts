function flipImage(image: number[][]): number[][] {
    for (let row of image) {
        row.reverse();
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

console.log(flipImage(image));