/*PSEUDOCODE
for i from 0 to n
    for j from 0 to n-i-1
        if array[j] > array[j+1]
            swap element at j with element at j+!
*/ 

import {swap} from './swap.ts'
function bubble_sort<T>(array: T[]){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j <  array.length - i - 1; j++){
            if(array[j] > array[j+1]){
                swap(array, j, j+1);
            }
        }
       
    }
    return array;
}


const array = [10, 9, 8, 7, 6, 5, 4]
console.log(bubble_sort(array));
