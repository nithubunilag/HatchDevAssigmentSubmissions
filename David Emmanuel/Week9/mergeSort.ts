// Merge sort algorithm (sorts in place)
function mergeSort(arr: number[]) {
    _mergeSort(arr, 0, arr.length - 1);
}

function merge(arr: number[], low: number, mid: number, high: number) {
    const left = arr.slice(low, mid + 1);
    const right = arr.slice(mid + 1, high + 1);

    let leftIndex = 0;
    let rightIndex = 0;
    let i = low;

    while (leftIndex < left.length || rightIndex < right.length) {
        if (leftIndex >= left.length) {
            // Done with left array, so add from right array
            arr[i] = right[rightIndex];
            rightIndex++;
        } else if (rightIndex >= right.length) {
            // Done with right array, so add from left array
            arr[i] = left[leftIndex];
            leftIndex++;
        }
        else {
            // Compare left and right array elements
            if (left[leftIndex] <= right[rightIndex]) {
                arr[i] = left[leftIndex];
                leftIndex++;
            } else {
                arr[i] = right[rightIndex];
                rightIndex++;
            }
        }
        i++;
    }
}

function _mergeSort(arr: number[], l: number, r: number) {
    if (l < r) {
        const m = Math.floor(l + (r - l) / 2);

        _mergeSort(arr, l, m);
        _mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

const arr = [10, 3, 2, 1, 6, 7];
mergeSort(arr);
console.log(arr);