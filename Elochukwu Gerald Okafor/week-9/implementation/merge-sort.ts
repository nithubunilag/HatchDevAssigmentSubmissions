// Recursively sorts an array using the merge sort algorithm
function mergeSort<T>(space: T[]) {
    if (space.length <= 1) return space;

    const mid = Math.floor(space.length / 2); // Partition the array in two
    const left = space.slice(0, mid); // Left sub-array
    const right = space.slice(mid); // Right sub-array

    return merge(mergeSort(left), mergeSort(right));
}

// Merges sub-arrays
function merge<T>(left: T[], right: T[]) {
    let result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex += 1;
        } else {
            result.push(right[rightIndex]);
            rightIndex += 1;
        }

        return result
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    }
}

const testSpace = [12, 25, 11, 13, 5, 6];
const sortedSpace = mergeSort(testSpace);

console.log('unsorted:', testSpace);
console.log('sorted:', sortedSpace); // Doesn't sort properly
