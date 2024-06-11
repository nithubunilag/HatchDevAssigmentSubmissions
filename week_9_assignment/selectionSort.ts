const myArr: number[] = [6, 3, 5, 9, 2, 11];
const n: number = myArr.length;

function selectionSort(arr: number[]): number[] {
    for (let i: number = 0; i < n - 1; i++) {
      let min: number = i;
      for (let j: number = i + 1; j < n; j++) {
        if (arr[j] < arr[i]) {
          min = j;
        }
      }
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

console.log(selectionSort(myArr)); 