// Adekanmi Israel
// adekanmiisrael8@gmail.com
// github.com/Israel-Adekanmi

function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return arr;

    // Step 1: Find the range of the numbers in the input array
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Step 2: Create and populate the count array
    const count = new Array(max - min + 1).fill(0);
    for (let num of arr) {
        count[num - min]++;
    }

    // Step 3: Build the sorted array
    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[index++] = i + min;
            count[i]--;
        }
    }

    return arr;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr)); // Output: [1, 2, 2, 3, 3, 4, 8]
