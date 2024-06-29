
function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    for (let i = 0; i<n-1; i++) {
        swapped = false;

        for (let j = 0; j<n-i-1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
}

const array1 = [7, 2, 8, 5, 1];
console.log("original array:", array1);
const sortedArray1 = bubbleSort(array1);
console.log("Sorted array", sortedArray1);