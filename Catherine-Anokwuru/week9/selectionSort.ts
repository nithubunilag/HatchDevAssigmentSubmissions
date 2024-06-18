function swap(arr: number[], i: number, j: number){
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function selectionSort(arr: number[]){
  for(let i = 0; i < arr.length ; i++){
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
}

const arr = [7,2,8,5]
selectionSort(arr)
console.log(arr);
