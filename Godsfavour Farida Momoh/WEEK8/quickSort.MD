Here's how it works:

1. We start with an array that we want to sort. The quicksort function takes three arguments:
   -  arr The array we want to sort.
   -  start: The index of the first element in the current subarray.
   -  end : The index of the last element in the current subarray.

2. Inside the quicksort function, we check if start  is less than  end. If so, we  start sorting. (That is our base case)

3. Next, we call the function called partition. This function helps divide the array into two parts: elements less than the pivot and elements greater than the pivot.

4. The partition function takes three arguments:
   - arr: The same array we're sorting.
   - start: The starting index.
   - end: The ending index.

5. We find the pivot element. in my case the pivot is the middle element between start and end.

We iterate through the array from start to end. If an element is less than the pivot, we move it to the left side of the pivot. If it's greater, we leave it on the right side.

7. After the loop, we swap the pivot element with the first element on the right side (i.e., the element at index I + 1). This ensures that the pivot is in its correct position.

8. Finally, we recursively call quicksort on the left and right subarrays (before and after the pivot).

9. The process repeats until the entire array is sorted. .
