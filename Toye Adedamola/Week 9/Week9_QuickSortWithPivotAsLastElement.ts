import { swap } from './swap.ts';

function quickSortL<T>(array: T[]): T[] {
    if (array.length <= 1) {
        return array;
    }
    quickSortRecursiveL(array, 0, array.length - 1);
    return array;
}

function quickSortRecursiveL<T>(array: T[], low: number, high: number): void {
    if (low < high) {
        const pivotIndex = partitionL(array, low, high);
        quickSortRecursiveL(array, low, pivotIndex - 1);
        quickSortRecursiveL(array, pivotIndex + 1, high);
    }
}

function partitionL<T>(array: T[], low: number, high: number): number {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
}

const LArray = [10, 16, 3, 8, 12, 3, 15, 6, 3, 9, 5];
console.log(quickSortL(LArray));
