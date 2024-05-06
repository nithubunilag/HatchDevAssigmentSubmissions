function mergeSort(arr1: number[]): number[] {
    if (arr1.length <= 1) return arr1;

    const mid = Math.floor(arr1.length / 2);
    const left = mergeSort(arr1.slice(0, mid));
    const right = mergeSort(arr1.slice(mid));

    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const mergedArray: number[] = [];
    let leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex++]);
        } else {
            mergedArray.push(right[rightIndex++]);
        }
    }

    return mergedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]
