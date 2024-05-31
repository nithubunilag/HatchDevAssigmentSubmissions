/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

function mergeSort<T>(array: T[]): T[] {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge<T>(left: T[], right: T[]): T[] {
  let resultArray: T[] = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
      } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
      }
  }

  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray2 = [64, 34, 25, 12, -22, 11, 90];
console.log("Unsorted array (Merge Sort):", unsortedArray2);

const sortedArray2 = mergeSort(unsortedArray2);
console.log("Sorted array (Merge Sort):", sortedArray2);
