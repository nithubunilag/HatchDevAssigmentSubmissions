// implementing selection sort algorithm in typescript

function selectionSort(arr: number[]): number[] {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([85, 5, 3, 8, 4, 2]));  

console.log(selectionSort([7, 9, 10, 2, 5, 8, 1, 6, 3, 4]));

// pseduocode

// selectionSort(array)
//   for i from 0 to length of array
//     min = i
//     for j from i + 1 to length of array
//       if array[min] > array[j]
//         min = j
//     if min != i
//       swap(array[i], array[min])
//   return array

// Output

