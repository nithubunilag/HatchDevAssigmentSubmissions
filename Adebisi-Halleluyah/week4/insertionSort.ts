function insertionSort(arr3: number[]): number[] {
    const n = arr3.length;
    for (let i = 1; i < n; i++) {
        const key = arr3[i];
        let j = i - 1;
        while (j >= 0 && arr3[j] > key) {
            arr3[j + 1] = arr3[j];
            j--;
        }
        arr3[j + 1] = key;
    }
    return arr3;
}

// Example usage
const arr3 = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]
