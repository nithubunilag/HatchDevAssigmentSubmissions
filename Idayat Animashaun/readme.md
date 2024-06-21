What is QuickSort Algorithm?
The Quick Sort algorithm is another example of  a 'divide and conquer' algorirthm that takes an unsorted array.
it works by selecting a pivot(usually the last element in the array) and then adding the remaining elements in the array to 2 sub-arrays - 1 that will contain all the element smaller than the pivot, and other that will contain the elements greater than, or equal to, the pivot, we then recurse this step on the sub arrays until the entire array is sorted.
 This algorithm has an average time complexity of 0(nlogn) but its worst case is 0(n^2) when the array is already sorted but in reverse order.
 
 How does it works
 To explain how it works, here's some pseudo code

 function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const unsortedArray = [5, 1, 4, 2, 7, 3, 6];
console.log(quickSort(unsortedArray));


Understanding the Code: Step by Step
Base Case: Our function quickSort takes an array of numbers as input. The first thing we do is check if the array has one or no elements (arr.length <= 1). If so, there's nothing to sort, so we just return the array as is. This is our base case, preventing the function from running infinitely.
Choosing a Pivot: We pick the last element in the array as the pivot (const pivot = arr[arr.length - 1]). This choice is arbitrary, and different methods can be used to choose the pivot. The key idea is to have a reference point to compare other elements against.
Partitioning the Array: Next, we create two new arrays, leftArr and rightArr. We iterate through each element in our input array (excluding the pivot), comparing them with the pivot. If an element is less than the pivot, it goes into leftArr; if it's greater, into rightArr. This step effectively partitions the array around our pivot.
Recursive Sorting: Here’s where the magic happens. We call quickSort recursively on both leftArr and rightArr. This recursive call continues to break down the arrays until they satisfy the base case (i.e., they have one or no elements).
Merging and Returning: Finally, we combine (or merge) our sorted subarrays and the pivot back into a single array using the spread operator [...quickSort(leftArr), pivot, ...quickSort(rightArr)]. This line is the essence of Quick Sort, where we continuously merge smaller sorted arrays into larger ones until the entire array is sorted.