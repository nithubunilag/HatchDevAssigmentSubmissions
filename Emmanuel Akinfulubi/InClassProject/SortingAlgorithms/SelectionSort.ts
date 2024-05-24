class SelectionSort {
  public sort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }

      const tmp = arr[min];
      arr[min] = arr[i];
      arr[i] = tmp;
    }
  }
}

const numbers = [5, 2, 9, 1, 5];
const sorter = new SelectionSort();
sorter.sort(numbers);
console.log(numbers);
