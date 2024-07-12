function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr.pop();
    const left: number[] = [];
    const right: number[] = [];

    if (pivot === undefined) return arr;

    arr.forEach(i => {
        ((i < pivot) ? left : right).push(i);
    });
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [10, 3, 2, 1, 6, 7];
console.log(quickSort(arr));