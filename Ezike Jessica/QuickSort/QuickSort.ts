// NAME :>      EZIKE JESSICA
//EMAIL :>      jessicaezike.je@gmail.com

function quicksort(arr: number[]): number[] {
    
    if (arr.length < 2) {
        return arr;
    }

    // Choose the pivot as the last element
    const pivot = arr[arr.length - 1];

    // dividing the array into two depending on the chosen pivot
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}


const array = [3, 6, 8, 10, 1, 2, 1];
console.log('Original array:', array);
const sortedArray = quicksort(array);
console.log('Sorted array:', sortedArray);
