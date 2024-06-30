/**
 * sort an array using bubble sort
 * @param arr array to be sorted
 * @returns sorted array
*/
function bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
       
    }

    return arr;
}

const data_1 = [4,90,6,12,87,4,6,3,0,9,6,2,89,543];

const sortedUsingBubblesort = bubbleSort(data_1);
console.log(data_1)