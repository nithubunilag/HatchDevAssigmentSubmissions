function selectionSort(arr: number[]): number[] {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }

    return arr;
}

const arrSelectionSort = [42, 10, 5, 34, 51, 18, 72, 17, 80];
console.log("Original Array:", arrSelectionSort);
console.log("Selection Sorted Array:", selectionSort(arrSelectionSort));
