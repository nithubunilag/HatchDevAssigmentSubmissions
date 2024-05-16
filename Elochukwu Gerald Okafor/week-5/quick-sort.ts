import swap from './swap.ts';

// Partitions and sorts sub-arrays
function partition<T>(subspace: T[], start: number, end: number) {
    const pivot = subspace[end]; // choosing the last element as the pivot point
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        if (subspace[j] < pivot) {
            i += 1;
            // swap element i and j
            swap(subspace, i, j);
        }
    }

    // swap elements i+1 and end
    swap(subspace, i + 1, end);
    return i + 1;
}

// Sorts an array using a recursive quick sort algorithm
function quickSort<T>(space: T[], start: number, end: number) {
    if (start < end) {
        const part = partition(space, start, end);
        // Sort each side recursively
        quickSort(space, start, part - 1);
        quickSort(space, part + 1, end);
    }
}

const testSpace = [24, 9, 29, 14, 19, 27];

console.log('Before sorting:', testSpace);
quickSort(testSpace, 0, testSpace.length - 1);
console.log('After sorting:', testSpace);
