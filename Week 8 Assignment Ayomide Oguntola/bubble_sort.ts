// implementing bubble sort algorithm using typescript

function bubble_Sort(arr: number[]): number[] {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubble_Sort([85, 5, 3, 8, 4, 2]));
console.log(bubble_Sort([7, 9, 10, 2, 5, 8, 1, 6, 3, 4]))

// pseduocode

// bubbleSort(array)
//   for i from 0 to length of array
//     for j from 0 to length of array - i - 1
//       if array[j] > array[j + 1]
//         swap(array[j], array[j + 1])
//   return array

// Output
