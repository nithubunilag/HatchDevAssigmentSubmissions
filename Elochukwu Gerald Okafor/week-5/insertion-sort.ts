function insertionSort<T>(space: T[]) {
    for (let i = 1; i < space.length; i++) {
        let key = space[i];
        let j = i - 1;

        while (j >= 0 && space[j] > key) {
            space[j + 1] = space[j];
            j -= 1;
        }

        space[j + 1] = key;
    }
}

const testSpace = [12, 11, 13, 5, 6];

console.log('Unsorted:', testSpace);
insertionSort(testSpace);
console.log('Sorted:', testSpace);
