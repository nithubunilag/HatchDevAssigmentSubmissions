const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
};

const _quickSort = (arr: number[], low: number, high: number) => {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        _quickSort(arr, low, pivotIndex - 1);
        _quickSort(arr, pivotIndex + 1, high);
    }
};

function quickSort(arr: number[]) {
    if (arr.length <= 1) return;
    _quickSort(arr, 0, arr.length - 1);
}

const arr = [10, 3, 2, 1, 6, 7];
quickSort(arr);
console.log(arr);