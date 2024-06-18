function partition(arr: number[], low: number, high: number) {
  let p = low - 1;
  let mid = arr[high];
  for (let i = low; i < high; i++) {
    if (arr[i] < mid) {
      p++;
      [arr[p], arr[i]] = [arr[i], arr[p]];
    }
  }
  [arr[p + 1], arr[high]] = [arr[high], arr[p + 1]];
  return p + 1;
}

function Quicksort(arr: number[], low: number, high: number) {
  if (low < high) {
    let midIndex = partition(arr, low, high);

    Quicksort(arr, low, midIndex - 1);
    Quicksort(arr, midIndex + 1, high);
  }
}

let array = [10, 7, 8, 9, 1, 5, 14, 12, 4];
Quicksort(array, 0, array.length - 1);
console.log(array);
