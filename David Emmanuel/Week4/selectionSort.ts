import shuffle from './shuffle.ts';

function selectionSort(arr: number[]): number[] {
    return _selectionSort([...arr]);
}

function _selectionSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    let minIndex = 0;
    for (let i=1; i<arr.length; i++) {
        if (arr[i] < arr[minIndex]) minIndex = i;
    }
    let min = arr.splice(minIndex, 1)[0];
    return [min, ...selectionSort(arr)];
}

const testArray = shuffle(20);
console.log(testArray);
console.log(selectionSort(testArray))