function selectionSort(array: number[]){
    for (let i = 0; i < array.length -1; i++){
        let idxMin = i;
        for(let j = i + 1; j < array.length; j++){
            if (array[j] < array[idxMin]){
                idxMin = j;
            }
        }
        if(idxMin !== i){
            const current = array[idxMin];
            array[idxMin] = array[i];
            array[i] = current;
        } 
    }return array;
}

console.log(selectionSort([1, 3, 5, 4, 7, 6]));


// Pseudo Code
// function selectionSort (array of numbers)
//      for(let i = 0; i is less than array length - 1; i++)
//            let minimum index = i
//            for(let j = 0; j less than array length; j++)
//                 if array of j is less than array of minimum index
//                     swap array of j with array of minimum index
//      return array of numbers