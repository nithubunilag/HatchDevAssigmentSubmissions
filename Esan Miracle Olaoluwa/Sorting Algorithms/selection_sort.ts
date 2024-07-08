// Esan Miracle Olaoluwa
// miracleesan7@gmail.com
// MiracleDev0

// Initialization:
// Start with the first element in the array.
// Assume this element is the minimum.
// Finding the Minimum:
// Compare this element with the next element in the array.
// If the next element is smaller, update the minimum.
// Continue this process until the end of the array is reached.
// Swapping:
// Swap the minimum element found in the previous step with the first element.
// Repeat:
// Move to the next element in the array and repeat the process for the remaining unsorted part of the array.
// Continue this process until the entire array is sorted.


function selectionSort(arr: number[]): number[] {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

const arr = [64, 25, 12, 22, 11];
const sortedArr = selectionSort(arr);
console.log(sortedArr); 