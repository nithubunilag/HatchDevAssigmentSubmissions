/**
 * use selection sort to sort an unsorted array
 * @param arr unsorted array
 * @returns sorted array
 */
function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        //select the index of the minimum element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        //swap
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

const data_2 = [4,90,6,12,87,4,6,3,0,9,6,2,89,543];

const sortedUsingSelectionsort = selectionSort(data_2);
console.log(data_2)