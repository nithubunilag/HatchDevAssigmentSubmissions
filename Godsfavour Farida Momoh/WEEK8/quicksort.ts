function quicksort(arr: number[], start: number, end: number): void {
    if (start < end) {
        const partIdx = partition(arr, start, end);
        quicksort(arr, start, partIdx - 1);
        quicksort(arr, partIdx + 1, end);
    }
}

function partition(arr: number[], start: number, end: number): number {
    let i = start - 1;
    let j = start;
    const pivotIdx = Math.floor((start + end) / 2);
    const pivot = arr[pivotIdx];

    while (j <= end) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        j++;
    }

    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}

const array: number[] = [1, 3, 5, 8, 0];
quicksort(array, 0, array.length - 1);
console.log(array);
