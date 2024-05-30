/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

function insertionSort<T>(array: T[]): T[] {
  for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          j = j - 1;
      }
      array[j + 1] = key;
  }
  return array;
}

const unsortedArray1 = [64, 34, 25, 12, -22, 11, 90];
console.log("Unsorted array (Insertion Sort):", unsortedArray1);

const sortedArray1 = insertionSort(unsortedArray1);
console.log("Sorted array (Insertion Sort):", sortedArray1);
