/*PSEUDOCODE
for i from 1 to n
    key = array[i]
    j = i-1
    while j >= 0 and array[i] > key
        array[j+1] = array[j]
        j = j-1
    array[j+1] = key
*/ 

function insertion_sort<T>(array: T[]): T[]{
    for(let i = 1; i < array.length; i++){
        let key = array[i];
        let j = i - 1;

        //Inner loop to handle the shifting
        while(j >= 0 && array[j] > key){
            array[j + 1] = array[j]; //Shifting elements to right
            j = j - 1;
        }
        //Inserting key at correct position
        array[j + 1] = key;
    }
    return array;
}

console.log(insertion_sort([8, 4, 9, 5, 7, 3, 2]));