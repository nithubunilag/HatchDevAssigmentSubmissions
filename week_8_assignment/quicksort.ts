function partition(array: number[], low: number, high: number): number {
    let pivot = array[high];
    let i = low;

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
        }
    }

    [array[i], array[high]] = [array[high], array[i]];
    return i;
}

function quicksort(array: number[], low: number = 0, high: number = array.length - 1): void {
    if (low < high) {
        let pivotIndex = partition(array, low, high);
        quicksort(array, low, pivotIndex - 1);
        quicksort(array, pivotIndex + 1, high);
    }
}

let myArray: number[] = [64, 34, 25, 12, 22, 11, 90, 5];
quicksort(myArray);
console.log("Sorted array:", myArray);

// **************** Explanation ****************

// **************** For the Partition Function ****************
/*  
line 1 -> I defined a partition function that takes in three parameters of 'array', 'low', and 'high'.
line 2 -> I set pivot to the element at the high(last) index.
line 3 -> I set i to low;
line 5 - 10; I looped through elements from low to high - 1, while j increments after every loop by 1

line 6 - 9 - > The if statement here within the for-loop checks if the current element is less than the pivot element. If it is, then it swaps elements at indices i and j with the statement below, pushing the element at index i to the left of the pivoted element.
[array[i], array[j]] = [array[j], array[i]];: then increment i by 1.

Else (that is, if the current element is greater than the pivot element) it pushes it to the right of the pivot element with the statement below.
[array[i], array[high]] = [array[high], array[i]];: then return the partition index i.
*/

// ********* For the Quicksort Function ***********************
/* 
line 16 - 22; defines the quicksort function with low set to 0 and high set to the last index of the array.
The if-statement within this function checks if low is less than high.
if it is we call the partition function to get the pivot index -> partition(array, low, high);
Recursively sorts the left sub-array -> quicksort(array, low, pivotIndex - 1); then
Recursively sorts the right sub-array -> quicksort(array, pivotIndex + 1, high);
*/ 

// ***** Invoking the Quicksort Function and Printing to the Console *****
/* 
Line 28 -> Declares and initializes a number array
Line 29 -> calls the quicksort function to sort the array (myArray)
Line 30 -> Prints the sorted array (myArray sorted)
*/