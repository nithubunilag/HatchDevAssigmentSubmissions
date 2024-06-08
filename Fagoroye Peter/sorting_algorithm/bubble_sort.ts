function bubblle(arr: number[]){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }return arr;
}

console.log(bubblle([2, 5, 1, 4, 9, 0]))


// Pseudo code

// function bubble sort (array of numbers)
//    for(let i = 0; i less than array length - 1; i++)
//        for (let j = 0; j less than array length - i - 1; j++)
//            if array of j is less than array of j + 1
//               swap array of j with array of j + 1
//   return array

