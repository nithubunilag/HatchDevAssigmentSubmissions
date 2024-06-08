function quicksort(array: number[]): number[] {
    if (array.length < 2) {
        return array
    }
    const pivot = array[Math.floor(array.length / 2)];

    const left: number[] = []
    const right: number[] = []
    const middle: number[] = []


    for (let i = 0; i < array.length; i++) {
        let value = array[i]
        if (value < pivot) {
            left.push(value)
        } else if (value > pivot) {
            right.push(value)
        } else {
            middle.push(value)
        }
    }
    return [...quicksort(left), ...middle, ...quicksort(right)];
}

const Arrays = [30, 12, 2, 10, 13,1]
const sortedArray = quicksort(Arrays)
console.log(sortedArray)