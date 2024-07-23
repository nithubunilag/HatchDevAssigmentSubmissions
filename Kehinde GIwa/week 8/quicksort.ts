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


explanation 
for quicksort a pivot is chosen from the array then a left array is created for elements less than the pivot anda right array for elements greater this is done recursively then all left array ,pivot and right array are merged and returned