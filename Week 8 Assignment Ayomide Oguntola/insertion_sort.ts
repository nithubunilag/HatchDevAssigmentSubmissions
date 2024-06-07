// implementing insertion sort algorithm using typescript

function insertion_Sort(arr: number[]): number[] {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertion_Sort([85, 5, 3, 8, 4, 2]));
console.log(insertion_Sort([7, 9, 10, 2, 5, 8, 1, 6, 3, 4]));

// pseduocode

// insertionSort(array)
//   for i from 1 to length of array
//     key = array[i]
//     j = i - 1
//     while j >= 0 and array[j] > key
//       array[j + 1] = array[j]
//       j = j - 1
//     array[j + 1] = key
//   return array

// Output
