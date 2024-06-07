//QUICK SORT IN PLACE WITH PIVOT AS THE MEDIAN

function quick_sort_in_place<T>(array: T[]): T[]{
    if(array.length <= 1){
        return array;
    }
    quickSortRecursive(array, 0, array.length - 1);
    return array;
}

function medianOfThree<T>(array: T[], low: number, high: number):number{
    const mid = Math.floor((low + high) / 2);
    const a = array[low];
    const b = array[mid];
    const c = array[high];
    let medianIndex

    if((a < b && b < c) || (c < b && b < a)){ //if b is median
        medianIndex = mid;
    }
    else if((b < a && a < c) || (c < a && a < b)){ //if a is median
        medianIndex = low;
    }
    else{//if c is median
        medianIndex = high
    }
    return medianIndex;
}
    
//PARTITION FUNCTION
//Partitioning the list into less than pivot and greater than pivot, and return index j which wil be the final index of pivot after swapping
function partition<T>(array:T[], low:number, high:number): number{
    const medianIndex = medianOfThree(array, low, high);
    [array[low], array[medianIndex]] = [array[medianIndex], array[low]];
    let pivot = array[low];
    //i search for elements > pivot
    //j searches for elements < pivot
    let i = low + 1;
    let j = high;

    while(i <= j){ //while there are  at least 2 elements in the array
        while(i <=  j &&  array[i]<= pivot){ //keep incrmenting i till you find an element less > pivot
            i++;
        }
        while(i <= j && array[j] >= pivot){ //keep decrementing j till you find an element < pivot
            j--;
        }
        //Swap elements if i is still less than j
        if(i < j){ 
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    //When i becomes > j, swap element at j with pivot
    [array[low], array[j]] = [array[j], array[low]];
    return j;
}


//RECURSIVELY SORT THE ARRAY IN PLACE
function quickSortRecursive<T>(array: T[], low: number, high:number): void{
    if(low < high){ //if there are at least 2 elements in the list
        const pivotIndex = partition(array, low, high);
        quickSortRecursive(array, low, pivotIndex - 1); //perform quick sort recursive recursively on the left side(< pivot)
        quickSortRecursive(array, pivotIndex+1, high); //perform quick sort recursive recursively on the right side(> pivot)
    }
}



const QArray =  [10, 16, 3, 8, 12, 3,  15, 6, 3, 9, 5];
console.log(quick_sort_in_place(QArray))