function insertion(array: number[]){
    for(let i = 1; i < array.length; i ++){
        let current;
        current = array[i];
        let j = i - 1;
        while( j >= 0 && array[j] > current ){
            array[j + 1] = array[j];
            j --;
        } 
        array[j + 1] = current;
    } 
    return array;
}

console.log(insertion([2, 3, 5, 4, 1]));


// Pseudo code
// Function InsertionSort(array)
//    For i from 1 to length of array - 1
//        key = array of i
//        j = i - 1
        
//        While j >= 0 and array of j > key
//            array of j + 1 = array of j
//            j--
        
//        array of j + 1 = key
