function quickSort(arrData: number[]):number[]{
  if (arrData.length < 2){
    return arrData
  }
  let pivot = arrData[arrData.length - 1]
  let left: number[] = []
  let right: number[] = []
  for (let i = 0; i < arrData.length - 1; i++){
    if (arrData[i] > pivot){
      left.push(arrData[i])
    } else {
      right.push(arrData[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const arrData = [3, 9, -5, 25, 4];

console.log(quickSort(arrData));

