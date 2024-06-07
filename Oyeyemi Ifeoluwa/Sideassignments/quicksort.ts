function quickSort(arr: number[], low: number, high: number): void {
    if (low < high) {
        const pivot = partition(arr, low, high) // Get partition index
        quickSort(arr, low, pivot - 1) // Recursively sort left subarray
        quickSort(arr, pivot + 1, high) // Recursively sort right subarray
    }
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high] // Choose the pivot (usually the last element)
    let i = low - 1 // Index of smaller element

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j) // Swap smaller element with current element
        }
    }
    swap(arr, i + 1, high) // Place pivot in its correct position
    return i + 1
}

function swap(arr: number[], i: number, j: number): void {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const myArray = [10, 7, 8, 9, 1, 5]
quickSort(myArray, 0, myArray.length - 1)

console.log("Sorted Array:", myArray)
