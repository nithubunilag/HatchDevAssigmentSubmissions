
function bubble_sort(array: number[]){
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j <  array.length; j++){
            if(array[i] > array[j]){
                swap(array, i, j);
            }
        }
       
    }
    return array;
}

function swap(array: number[], index1: number, index2: number){
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

const array = [10, 9, 8, 7, 6, 5, 4]
console.log(bubble_sort(array));
