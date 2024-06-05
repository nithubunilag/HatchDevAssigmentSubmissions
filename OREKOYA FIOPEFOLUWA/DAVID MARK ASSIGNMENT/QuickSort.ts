function quicksort(array: number[]): number[] {
    if (array.length < 2) {
        return array
    }
    const middleElement = array[Math.floor(array.length / 2)];

    const left: number[] = []
    const right: number[] = []
    const middle: number[] = []


    for (let i = 0; i < array.length; i++) {
        let value = array[i]
        if (value < middleElement) {
            left.push(value)
        } else if (value > middleElement) {
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

//Line 2&3: if the array has less than 2 elements (1 or 0), it is sorted so return the array as it is.
//Line 8: trying to get the middle element as the pivot element
//Line 8,9&10: creating different arrays to hold elements greater than,less than or equal to the middle(Pivot)element
//Line 11: the for loop for looking through each element in the array and 
//Line 13&14: if the element is less than than the pivot, push it to the left array
//Line 15&16: if the element is greater than than the pivot, push it to the right array
//Line 17&18: or else if the element is equal to the pivot, push it to the middle array
//Line 24: apply quicksort and combine all theleft, right  arrays using the spread syntax
