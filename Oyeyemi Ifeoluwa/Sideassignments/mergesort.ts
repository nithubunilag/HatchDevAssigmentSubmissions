// const sort = [1, 3, 2, 5, 4, 6, 7, 9, 8, 0]

// function mergeSort(input: number[]): number[] {

//     let middle = Math.floor(input.length/2)
//     let left = input.slice(0, middle)
//     let right = input.slice(middle)
//     if (input.length <= 1) {
//         return input
//     } 

//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left: number[], right: number[]): number[] {
//     let resultArray = [], leftIndex = 0, rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             resultArray.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             resultArray.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return resultArray
//         .concat(left.slice(leftIndex))
//         .concat(right.slice(rightIndex));
// }
// console.log(mergeSort(sort))



const mergeSort = (arr) => {
    if(arr.length <= 1)
        {
            return(arr)
    }
    let mid = Math.floor(arr.length/ 2)
    let left = arr.slice/2
    let right = arr.slice/2

    mergeSort(left)
    mergeSort(right)

    const merge = (left: number[], right:number[]) => {
        let result:number[] = []
        let leftIndex = 0
        let rightIndex = 0

        while(leftIndex < left.length && rightIndex< right.length){

        }
    }
}
