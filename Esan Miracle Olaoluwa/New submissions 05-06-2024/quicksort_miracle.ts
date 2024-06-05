// ESANMIRACLE OLAOLUWA
//miracleesan7@gmail.com
//MiracleDev0

//readme for quicksort algorithm of the code
    //quickSort is a divide and conquer algorithm that divides the array into smaller sub-arrays and then combines them in a sorted manner.
    //The algorithm works as follows:
    //1. If the array has 1 or 0 elements, return the array.
    //2. Select the last element of the array as the pivot.
    //3. Create two empty arrays, left and right.
    //4. Iterate through the array and compare each element to the pivot.
    //5. If the element is less than the pivot, add it to the left array. Otherwise, add it to the right array.
    //6. Recursively call quickSort on the left and right arrays.
    //7. Combine the sorted left array, pivot, and sorted right array.
    //8. Return the combined array.

function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage:
  const array = [5, 3, 8, 4, 2, 7, 1, 10];
  const sortedArray = quickSort(array);
  console.log(sortedArray);

