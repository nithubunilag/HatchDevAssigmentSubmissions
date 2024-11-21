function InsertionSort(array) {
    let i, key, j;
    for (i = 1 ; i < array.length; i++) {
        key = array[i];
        j = i - 1;
        while(j >= 0 && array[j] > key){
            array[j+1]= array[j];
            j--;
        };
    array[j+1] = key;
    }
return array; 
}

let arr = [7,2,8,5];
let output = InsertionSort(arr);
console.log(output); 