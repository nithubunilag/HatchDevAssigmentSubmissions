import shuffle from './shuffle.ts';

function bubbleSort(array: number[]) {
    for (let i=1; i<array.length; i++) {
        for (let j=0; j<array.length-i; j++) {
            const left = array[j];
            const right = array[j+1];
            if (left > right) {
                array[j] = right;
                array[j+1] = left;
            }
        }
    }
}

const testArray = shuffle(20);
console.log(testArray);
bubbleSort(testArray);
console.log(testArray);