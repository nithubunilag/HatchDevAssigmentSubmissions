function selectionSort(arr: number[]): number[] {
    const n = arr2.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr2[j] < arr2[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        [arr2[i], arr2[minIndex]] = [arr2[minIndex], arr2[i]];
    }
    return arr2;
}

// Example usage
const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]
