function flipHorizontal(matrix: number[][]): number[][] {
    return matrix.map(row => row.reverse());
}

function flipVertical(matrix: number[][]): number[][] {
    return matrix.reverse();
}

function flipBoth(matrix: number[][]): number[][] {
    return flipVertical(flipHorizontal(matrix));
}

const originalMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Original Matrix:');
console.log(originalMatrix);

console.log('Horizontally Flipped:');
console.log(flipHorizontal([...originalMatrix])); 

console.log('Vertically Flipped:');
console.log(flipVertical([...originalMatrix])); 

console.log('Both Flipped:');
console.log(flipBoth([...originalMatrix]));
