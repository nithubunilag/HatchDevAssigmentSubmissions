// Esan Miracle Olaoluwa
// miracleesan7@gmail.com
// MiracleDev0

// Initialization:

// Start with the second element (assuming the first element is already sorted).

// Insertion:

// Compare the current element with the elements in the sorted part of the array.
// Shift the elements in the sorted part that are greater than the current element to one position to the right.
// Insert the current element into its correct position in the sorted part.

// Repeat:

// Move to the next element in the array and repeat the process until the entire array is sorted.

function insertionSort(arr : number[]) : number[] {
    let n = arr.length;
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

const arrays = [64, 25, 12, 22, 11];
const results = insertionSort(arrays);
console.log(results); 