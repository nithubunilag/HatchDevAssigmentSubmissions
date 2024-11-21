class InsertionSort {
  public sort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
}

const numbers = [5, 2, 9, 1, 5];
const sorter = new InsertionSort();
sorter.sort(numbers);
console.log(numbers);
