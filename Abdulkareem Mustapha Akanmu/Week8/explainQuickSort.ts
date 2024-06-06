/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

// Explain step by step of quicksort

/** This is easier to understand and explain for me, 
  * but I know the space complexity is bad, 
  * because every recursive call will create 2 new arrays
  */

function quickSort(arr: number[]): number[] {
  // Base case: If the array has 1 or less elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element (I will use the last element here)
  const pivot = arr[arr.length - 1];

  // Initialize two empty arrays for elements less than and greater than the pivot
  const left: number[] = [];
  const right: number[] = [];

  // Partition the array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right sub-arrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Combine the sorted sub-arrays with the pivot in the middle
  return [...sortedLeft, pivot, ...sortedRight];
}
