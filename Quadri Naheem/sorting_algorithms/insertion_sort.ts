/**
 * use insertion sort to sort an unsorted array
 * @param arr unsorted array
 * @returns sorted array
 */
function insertionSort(arr: number[]): number[] {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = current;
    }
    
    return arr;
}


const data_3 = [4,90,6,12,87,4,6,3,0,9,6,2,89,543];
const sortedUsingInsertionsort = insertionSort(data_3)
console.log(sortedUsingInsertionsort);
