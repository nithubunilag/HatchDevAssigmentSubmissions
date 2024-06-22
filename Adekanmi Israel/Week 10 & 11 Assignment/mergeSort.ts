// Adekanmi Israel
// adekanmiisrael8@gmail.com
// github.com/Israel-Adekanmi
let n1: number, n2: number;

const merge = (arr: number[], p: number, q: number, r: number) => {
  n1 = q - p + 1;
  n2 = r - q;

  let l = new Array(n1);
  let R = new Array(n2);

  // Copy data to temporary arrays l[] and R[]
  for (let i = 0; i < n1; i++) {
    l[i] = arr[p + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[q + 1 + j];
  }

  // Merge the temporary arrays back into arr[p..r]
  let i1 = 0, j1 = 0, k = p;

  while (i1 < n1 && j1 < n2) {
    if (l[i1] <= R[j1]) {
      arr[k] = l[i1];
      i1++;
    } else {
      arr[k] = R[j1];
      j1++;
    }
    k++;
  }

  // Copy the remaining elements of l[], if there are any
  while (i1 < n1) {
    arr[k] = l[i1];
    i1++;
    k++;
  }

  // Copy the remaining elements of R[], if there are any
  while (j1 < n2) {
    arr[k] = R[j1];
    j1++;
    k++;
  }
};

const mergeSort = (arr: number[], p: number, r: number) => {
  if (p < r) {
    const q = Math.floor((p + r) / 2);

    mergeSort(arr, p, q);
    mergeSort(arr, q + 1, r);

    merge(arr, p, q, r);
  }
};

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
console.log("Given array:", arr);
mergeSort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);
