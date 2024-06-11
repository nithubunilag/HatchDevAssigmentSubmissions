let myArray: number[] = [64, 34, 25, 12, 22, 11, 90, 5];
const n: number = myArray.length;

function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < n - 1; i++) {
    let swapped: boolean = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return `Sorted array: [${arr}]`;
}
console.log(bubbleSort(myArray));
