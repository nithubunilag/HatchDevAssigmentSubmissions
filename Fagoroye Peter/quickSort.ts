let array: number[] = [];
function quickSort(array){
    if(array.length < 2){
        return array;
    }

    let pivot: number = array[array.length - 1];
    let left: number[] = [];
    let right: number[] = [];
    for(let i = 0 ; i < array.length - 1; i++){
        if(array[i] < pivot){
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }
    return [... quickSort(left), pivot, ... quickSort(right)];
}

console.log(quickSort([2, 5, 8, 9, 0, 7]));