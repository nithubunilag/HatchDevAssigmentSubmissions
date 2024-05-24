class BubbleSort {
  public sort(arr: number[]) {
    const size = arr.length;
    for (let i = 0; i < size - 1; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          this.swap(arr, j, j + 1);
        }
      }
    }
  }

  private swap(arr: number[], a: number, b: number) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
}

const numbers = [5, 2, 9, 1, 5];
const sorter = new BubbleSort();
sorter.sort(numbers);
console.log(numbers);
