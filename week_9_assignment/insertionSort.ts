let myArray: number[] = [64, 34, 25, 12, 22, 11, 90, 5];
let n: number = myArray.length;

function insertionSort(arr: number[]): number[] {
  for (let i: number = 1; i < n; i++) {
    let insertIndex: number = i;
    let currentValue: number = arr[i];
    for (let j: number = i - 1; j >= 0; j--) {
      if (arr[j] > currentValue) {
        arr[j + 1] = arr[j];
        insertIndex = j;
      } else {
        break;
      }
    }
    arr[insertIndex] = currentValue;
  }
  return arr;
}


console.log(insertionSort(myArray))