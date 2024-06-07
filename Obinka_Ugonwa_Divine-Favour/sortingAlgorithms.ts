// Name: Obinka Ugonwa Divine-Favour
// email: divneobk@gmail.com

// merge sort algorithm

const mergeSort = (arr: number[]) => {
    if (arr.length <= 1){return arr}

    let mid = Math.floor(arr.length / 2)
    let left = [0, mid]
    let right = [mid,]

    return merge(mergeSort(left), mergeSort(right))

}

const merge = (left:number[], right:number[]) =>{
        let result: number[] = []

        let leftIndex = 0
        let rightIndex = 0

        while(leftIndex < left.length && rightIndex < right.length){
            if(left[leftIndex] < right[rightIndex]){
                result.push(left[leftIndex])
                leftIndex++
            }else {
                result.push(right[rightIndex])
                rightIndex++
            }

            return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
        }
}


// quick sort algorithm
// l is lowest index in arr
// h is highest index in arr
// p is pivot
// arr is the array

function quickSort(arr: number[], l: number, h: number){

    if(l < h){
        const p = partition(arr, l, h)

        quickSort(arr, l, p)
        quickSort(arr, p + 1, h)

    }
}
const partition = (arr: number[], l: number, h: number): number => {
    let p = arr[h]

    let i = l - 1, j = l

    for(j < h; j++;){
        if(arr[j] < p){
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]]
    return i + 1
}

// testing quicksort

let arr = [10, 45, 34, 94, 12, 31, 24]
console.log("Unsorted array: ", arr)

quickSort(arr, 0, arr.length - 1)
console.log("Sorted array: ", arr)