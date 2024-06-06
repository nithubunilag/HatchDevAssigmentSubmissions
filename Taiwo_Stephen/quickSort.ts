function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const less = arr.filter((el, i) => el <= pivot && i !== 0);
  const greater = arr.filter((el, i) => el > pivot && i !== 0);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

const arrSam = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", arrSam);
const sortdArr = quickSort(arrSam);
console.log("Sorted Array:", sortdArr);