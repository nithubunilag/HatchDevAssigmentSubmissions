function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  const left: number[] = [];
  const right: number[] = [];
  const equal: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  return [...quicksort(left), ...equal, ...quicksort(right)];
}

const array = [11, 12, 10, 9, 1, 5];
const sortedArray = quicksort(array);
console.log("Sorted array:", sortedArray);
