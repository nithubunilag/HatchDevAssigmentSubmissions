
function quicksort(arr: number[]): number[] {
 
    if (arr.length <= 1) {
        return arr;
    }

    const pivot: number = arr[arr.length - 1];

    const lessThanPivot: number[] = arr.slice(0, -1).filter(x => x <= pivot);
    const greaterThanPivot: number[] = arr.slice(0, -1).filter(x => x > pivot);

    const sortedLess: number[] = quicksort(lessThanPivot);
    const sortedGreater: number[] = quicksort(greaterThanPivot);
  
    return [...sortedLess, pivot, ...sortedGreater];
}

const array: number[] = [10, 7, 8, 9, 1, 5];
const sortedArray: number[] = quicksort(array);
console.log("Sorted array:", sortedArray);
