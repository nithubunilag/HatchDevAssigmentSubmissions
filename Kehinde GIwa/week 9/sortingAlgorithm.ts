const arr = [7, 6, 9, 2, 8, 5];
let min: number;
const n = arr.length;

// function to swap array elements
const swap = function (a: number, b: number) {
  let current = arr[a];
  arr[a] = arr[b];
  arr[b] = current;
};

///////////////////////////////
// Selection sort

const SelectionSort = function (arr: number[]) {
  for (let i = 0; i < n; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        swap(j, min);
      }
    }
  }
};

/////////////////////////////////
// Bubble sort
const bubbleSort = function (arr: number[]) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
};

console.log(arr);

////////////////////////////////
// Insertion sort
const insertionSort = function (arr: number[]) {
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 1; j < arr.length-1; j++) {
      if (arr[j] < arr[i]) {
        swap(j,i );
      }
    }
  }
  return arr;
};

console.log(insertionSort(arr));
///////////////////////////////
// quick sort
const quickSort = function (arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }

  const partition = arr[arr.length - 1];
  const leftArray: number[] = [];
  const rightArray: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < partition) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  return [...quickSort(leftArray), partition, ...quickSort(rightArray)];
};

/////////////////////////////
// merge sort
const mergeSort = function (arr: string | any[]) {
  if (arr.length <= 1) return arr;

  const left: number[] = [];
  const right: number[] = [];
};
