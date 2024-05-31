/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

function selectionSort<T>(array: T[]): T[] {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
          if (array[j] < array[minIndex]) {
              minIndex = j;
          }
      }

      if (minIndex !== i) {
          [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
  }

  return array;
}

const unsortedArray3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array (Selection Sort):", unsortedArray3);

const sortedArray3 = selectionSort(unsortedArray3);
console.log("Sorted array (Selection Sort):", sortedArray3);
