function insertionSort(arr: number[]): number[] {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

    return arr;
}

const arrInsertionSort = [42, 10, 5, 34, 51, 18, 72, 17, 80];
console.log("Original Array:", arrInsertionSort);
console.log("Insertion Sorted Array:", insertionSort(arrInsertionSort));
