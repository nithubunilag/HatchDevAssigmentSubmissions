function insertionSort(data: number[]): number[] {
  for (let i = 1; i < data.length; i++) {
    let numberToInsert = data[i];
    let j = i - 1;
    while (j >= 0 && data[j] > numberToInsert) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = numberToInsert;
  }
  return data;
}

const data = [3, 25, -5, 9, 4];
insertionSort(data)
console.log(data);

