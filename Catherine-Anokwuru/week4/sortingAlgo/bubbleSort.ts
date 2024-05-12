function bubbleSort (arr: number[]): number[] {
  let isAscending: boolean
  do {
    isAscending = false
    for (let i = 0; i < arr.length - 1; i++){
      if (arr[i] > arr[i + 1]){
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        isAscending = true
      }
    }
  } while (isAscending)
     return arr;
}

const arr = [3,25,-5, 9,4]
bubbleSort(arr)
console.log(arr);
