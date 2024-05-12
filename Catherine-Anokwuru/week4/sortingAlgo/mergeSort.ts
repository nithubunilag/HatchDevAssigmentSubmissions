function mergeSort(item: number[]): number[] {
  if (item.length < 2) {
    return item;
  }
  const mid = Math.floor(item.length / 2);
  const leftArr = item.slice(0, mid);
  const rightArr = item.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr: number[], rightArr: number[]): number[] {
  const sortedArr: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift()!);
    } else {
      sortedArr.push(rightArr.shift()!);
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const item = [3, 25, -5, 9, 4];
console.log(mergeSort(item));