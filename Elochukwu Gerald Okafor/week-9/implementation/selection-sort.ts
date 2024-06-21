import swap from './swap';

// Iteratively sorts an array in place using the Selection Sort algorithm
function selectionSort<T>(space: T[]) {
    let minIndex = 0;

    for (let i = 0; i < space.length; i++) {
        minIndex = i;

        for (let j = i + 1; j < space.length; j++) {
            if (space[j] < space[minIndex]) minIndex = j;
        }

        // No need to swap if it's the same index
        if (minIndex != i) swap(space, minIndex, i);
    }
}

let testSpace = [65, 25, 12, 22, 11];

console.log('Unsorted:', testSpace);
selectionSort(testSpace); // Sort the array
console.log('Sorted:', testSpace);
