// Ajayi Odunayo Mayowa
// odunayoajayi2004@gmail.com
// Odunayo222

// Initialization:

// n = length(array): Determine the length of the array.
// The outer loop runs from the first element to the second last element (i from 0 to n-1).

// Comparison and Swapping:

// Initialize a flag swapped to false to detect any swap.
// The inner loop runs from the first element to the n-i-2 element. This range decreases with each pass since the last i elements are already sorted.
// Compare each pair of adjacent elements (array[j] and array[j + 1]).
// If the current element is greater than the next element, swap them (swap(array[j], array[j + 1])) and set swapped to true.

// Repeat:

// After the inner loop, if no elements were swapped (swapped remains false), the array is sorted, and we can break out of the loop.
// Continue the outer loop until the entire array is sorted.

function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  const array = [64, 25, 12, 22, 11];
  const result = bubbleSort(array);
  console.log(result);