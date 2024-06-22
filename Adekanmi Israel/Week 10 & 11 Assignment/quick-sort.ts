// Adekanmi Israel
// adekanmiisrael8@gmail.com
// github.com/Israel-Adekanmi

let i: number, j: number, temp: number, pivot: number;

const swap = (array: number[], i: number, j: number): void => {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const partition = (arr: number[], low: number, high: number): number => {
  i = low - 1;
  pivot = arr[high];

  for (j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i += 1;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

let iterNo: number = 1;

const quickSort = (
  arr: number[],
  low: number = 0,
  high: number = arr.length - 1,
): void => {
  if (low < high) {
    let partitioned = partition(arr, low, high);
    console.log(`Iteration ${iterNo++}`, arr);

    quickSort(arr, low, partitioned - 1);
    quickSort(arr, partitioned + 1, high);
  };
};

let arrQuick: number[] = [5, 3, 1, 8, 7, 4];
quickSort(arrQuick);
console.log("Sorted Array:", arrQuick);
