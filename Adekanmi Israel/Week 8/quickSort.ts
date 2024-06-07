// Adekanmi Israel
// adekanmiisrael8@gmail.com
// github.com/Israel-Adekanmi


// Thought Process

// Basically the quick sort works with the divide and conquer method

// It involves breaking down large problems into smaller piece. A pivot has to selected.
// It can be first, last, middle or any randomly selected element.

/**
 * Quick Sort Algorithm
 * 
 * Quick Sort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array
 * and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
 * The sub-arrays are then sorted recursively.
 */

function quickSort(arr: number[]): number[] {
    // If the array is empty or has one element, it is already sorted.
    if (arr.length <= 1) {
        return arr;
    }

    // Select a pivot element. Here we choose the middle element for simplicity.
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];

    // Arrays to hold elements less than and greater than the pivot
    const less: number[] = [];
    const greater: number[] = [];

    // Loop through all elements except the pivot
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue; // Skip the pivot element
        if (arr[i] < pivot) {
            less.push(arr[i]); // Elements less than the pivot go to the 'less' array
        } else {
            greater.push(arr[i]); // Elements greater than the pivot go to the 'greater' array
        }
    }

    // Recursively sort the 'less' and 'greater' arrays and combine them with the pivot
    return [...quickSort(less), pivot, ...quickSort(greater)];
}


const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
