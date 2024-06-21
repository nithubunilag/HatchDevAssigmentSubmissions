function bubblesort(arr: number[]) {
    let n = arr.length;
    let swapped: boolean;

    do {swapped = false; 
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1]
                swapped = true;
            }
    }
}
    while (swapped);
    return arr;

}

const my_array = [72, 32, 5, 14, 88]
console.log ("DM the sorted array is : ", bubblesort(my_array))
