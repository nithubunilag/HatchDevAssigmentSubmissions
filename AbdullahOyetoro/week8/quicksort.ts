function quickSort(arr: number[], start: number = 0, end: number =arr.length-1): void {
  if (start < end) {
      const partIdx = partition(arr, start, end);
      quickSort(arr, start, partIdx - 1);
      quickSort(arr, partIdx + 1,end);
  }
}

function partition(arr: number[], start: number, end: number): number {
  let i = start - 1;
  let j = start;
  const pivot = arr[end];

  while (j <= end) {
      if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      j++;
  }

  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
}

const numArray: number[] = [13,65,743,646,24,74,758,13,4,3];
quickSort(numArray);
console.log(numArray);