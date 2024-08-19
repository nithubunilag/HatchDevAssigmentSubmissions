//Here is my thought process

// Imagine you have a pile of books and you want to sort them by their titles. Here's a simple way to do it using a method similar to quick sort:

// Pick a Pivot Book: Choose a book from the pile. This book is called the "pivot". more like a reference stuff
// Sort Around the Pivot: Go through the pile of books and divide them into two groups:
// Books with titles that come before the pivot's title (alphabetically).
// Books with titles that come after the pivot's title.
// Repeat: For each group, repeat the process:
// Pick a new pivot book from the group.
// Divide the books around this new pivot.
// Combine: Once each group is sorted, combine the groups back together in order, with the pivot book in the middle.
// By repeatedly choosing pivots and dividing the books into smaller and smaller groups, you eventually sort the entire pile.



function quickSort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Pick a pivot element (we'll use the last element for simplicity)
    const pivot = arr[arr.length - 1];
    // Arrays to hold the elements less than, equal to, and greater than the pivot
    const left: number[] = [];
    const right: number[] = [];
    const equal: number[] = [];

    // Partition the array into left, right, and equal arrays
    for (const num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    // Recursively sort the left and right arrays and concatenate the results
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr)); // Output: [1, 1, 2, 3, 6, 8, 10]
