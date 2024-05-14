/**
 * sort an array using bubble sort
 * @param arr array to be sorted
 * @returns sorted array
 */
function bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }

    return arr;
}

/**
 * use merge sort to sort unsorted array
 * @param arr unsorted array
 * @returns sorted array
 */
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

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

const decimalNumbers = [3.2, 5.8, 3.99, 7.8, 4, 0.7, 6.5, 5.55, 8.8];
const numbers = [4,90,6,12,87,4,6,3,0,9,6,2,89,543];

const sortedUsingBubblesort = bubbleSort(numbers);
const sortedUsingMergesort = mergeSort(decimalNumbers);
const sortedUsingSelectionsort = selectionSort(numbers);
const sortedUsingInsertionsort = insertionSort(decimalNumbers);
console.log(sortedUsingInsertionsort);
