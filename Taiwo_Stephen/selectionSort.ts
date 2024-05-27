function selectionSort(arr: number[]): number[] {
  const arrLen = arr.length;

  for (let i = 0; i < arrLen - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arrLen; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      if (minIndex !== i) {
          const temp = arr[i];
          arr[i] = arr[minIndex];
          arr[minIndex] = temp;
      }
  }

  return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", array);
const sortArr = selectionSort(array);
console.log("Sorted Array:", sortArr);
