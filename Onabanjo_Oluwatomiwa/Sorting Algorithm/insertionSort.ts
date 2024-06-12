function insertarray(arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
}

console.log(insertarray([1, 2, 3, 4, 5], 2, 6));
