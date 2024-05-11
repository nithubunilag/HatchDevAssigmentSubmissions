function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const merge = (left: number[], right: number[]): number[] => {
        let result: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    };

    return merge(mergeSort(left), mergeSort(right));
}

const numbers = [42, 10, 5, 34, 51, 18, 72, 17, 80];
console.log("Original Array:", numbers);
console.log("Merge Sorted Array:", mergeSort(numbers));
