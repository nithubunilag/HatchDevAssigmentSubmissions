function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot: number = arr[Math.floor(arr.length / 2)];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue; // here we skip the pivot element
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage:
const array: number[] = [3, 6, 8, 10, 1, 2, 1];
const sortedArray: number[] = quickSort(array);
console.log(sortedArray);
