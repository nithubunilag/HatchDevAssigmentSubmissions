function insertionSort(arr: number[]): number[] {
  const arrLen = arr.length;

  for (let i = 1; i < arrLen; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;
      }
      
      arr[j + 1] = key;
  }

  return arr;
}

const arraySample = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", arraySample);
const sortedArray = insertionSort(arraySample);
console.log("Sorted Array:", sortedArray);
