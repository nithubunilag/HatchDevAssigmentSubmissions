function insertionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
}

const array2 = [7, 2, 8, 5];
console.log("Original Array:", array2);
const sortedArray2 = insertionSort(array2);
console.log("sorted Array:", sortedArray2)
