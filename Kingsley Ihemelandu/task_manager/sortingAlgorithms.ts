function bubbleSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge<T>(left: T[], right: T[]): T[] {
  const merged: T[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  return merged.concat(left.slice(i)).concat(right.slice(j));
}

function selectionSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

function quickSort<T>(arr: T[]): T[] {
  // Base case
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1]; // Choose last element as pivot
  const left: T[] = [];
  const right: T[] = [];

  // Partitioning
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursive calls
  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  return leftSorted.concat(pivot, rightSorted);
}

// Remember, these sorting algorithms have different time complexities. Bubble sort has a worst-case time complexity of O(n^2), while merge sort and insertion sort have a time complexity of O(n log n) in most cases. Selection sort also has a time complexity of O(n^2). Choose the sorting algorithm that best suits your needs based on the size and characteristics of your data.

