function quicksort(arr: number[]): void {
    const stack: [number, number][] = [[0, arr.length - 1]];

    while (stack.length) {
        const [low, high] = stack.pop()!;
        if (low < high) {
            const pivotIndex = partition(arr, low, high);
            stack.push([low, pivotIndex - 1]);
            stack.push([pivotIndex + 1, high]);
        }
    }
}

//used in quick sort
function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[low];
    let left = low + 1;
    let right = high;

    while (true) {
        while (left <= right && arr[left] <= pivot) {
            left++;
        }
        while (left <= right && arr[right] >= pivot) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        } else {
            break;
        }
    }

    [arr[low], arr[right]] = [arr[right], arr[low]];
    return right;
}


const data_4 = [4,90,6,12,87,4,6,3,0,9,6,2,89,543];
const sortedUsingQuicksort = quicksort(data_4);