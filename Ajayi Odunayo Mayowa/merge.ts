//name: Ajayi Odunayo Mayowa
//github: odunayo222
//email: odunayoajayi2004@gmail.com
function mergeSort(arr: number[]): number[] {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Spliting the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort each half
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare the elements of the left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);
