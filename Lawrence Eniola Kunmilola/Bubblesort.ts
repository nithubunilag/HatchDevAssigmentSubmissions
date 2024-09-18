function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage:
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr1)); // Output: [11, 12, 22, 25, 34, 64, 90]
