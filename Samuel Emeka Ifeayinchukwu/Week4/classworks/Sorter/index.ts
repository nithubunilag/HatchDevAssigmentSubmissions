import  Sorter from "./sorter";

const array = [ 5, 6, 2, 10, 16, 1]
const sorter = new Sorter()
// console.log(sorter.mergesort(array))

// const twoSum =(list: number[], target: number) => {
//     const sortedList = sorter.mergesort(list)
//     let left: number = 0;
//     let right:number = sortedList.length - 1
//     while(left < right){
//         let currentSum: number;
//         if(currentSum === target){
//             return [left, right]
//         } else if(currentSum < target){
//             left++
//         } else {
//             right--
//         }
//     }
//     return []
// }