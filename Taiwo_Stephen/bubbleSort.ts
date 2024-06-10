function bubbleSort(arr: number[]): number[] {
    const arrLen = arr.length;
    let swapped: boolean;
    
    do {
        swapped = false;
        for (let i = 0; i < arrLen - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    return arr;
}

const arrSample = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", arrSample);
const sortedArr = bubbleSort(arrSample);
console.log("Sorted Array:", sortedArr);
