function bubbleSort(arr: number[]): number[] {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const Numbers = [42, 10, 5, 34, 51, 18, 72, 17, 80];
console.log("Original Array:", Numbers);
console.log("Bubble Sorted Array:", bubbleSort(Numbers));
