/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */
import swap from './swap';

// Sorts an array in place using the Bubble Sort algorithm
function bubbleSort<T>(space: T[]) {
    let swapped = false;

    for (let i = 0; i < space.length - 1; i++) {
        for (let j = 0; j < space.length - i - 1; j++) {
            if (space[j] > space[j + 1]) {
                swap(space, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped) break; // Terminate the loop if already ordered
    }
}

let testSpace = [23, 1, 10, 5, 2];

console.log('Unsorted:', testSpace);
bubbleSort(testSpace); // Sort the array
console.log('Sorted:', testSpace);
