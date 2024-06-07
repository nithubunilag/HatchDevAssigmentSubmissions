Toye Adedamola Taibat
toye.adedamola@gmail.com

- Quick sort is a recursive algorithm like merge sort
- It involves the use of a pivot
- A pivot is one of the items in the array that meets the following conditions after we’ve sorted it:
    - In the final sorted array, the pivot should be in its correct position
    - Items to the left of the pivot are smaller
    - Items to the right of the pivot are larger
- There are different ways to choose the pivot:
    - We can use the first element:
        - this is simple and fast to implement but can lead to poor performance on already sorted or nearly sorted arrays
    - We can use the last element:
        - This is also simple and fast but can perform poorly
    - We can use the middle element:
        - This is a good compromise to avoid  some worst case scenerios but it is slightly more complex than choosing the first or the last
    - Median of three
        - This involves using the median of the first, middle and last elements of the list as the pivot
        - It is more complex but yields better average performance
- Whatever pivot we choose, the goal is to make sure the pivot is in its sorted position and the elements to the left of it are smaller(but may not be sorted) and the elements to the right of it are bigger(but may not be sorted)

- Just like every recursion, our quick sort function should have  a base case.
- There’s no need to sort a single element list or an empty list
- This means that the whole partitioning will stop when we have a single element list  or an empty list
- Suppose we want to sort the list `4 6 3 2 9 7 3 5` and we pick the first element 4 as our pivot.
- We want to partition the list in a way that the elements to the left of 4 are smaller and the elements to the right of 4
- Essentially breaking the list into 2 sublists ( less than pivot and greater than pivot) - `3 2 3` and `6 9 7 5`
- These 2 sublists aren’t sorted but if they were sorted we can just join then together with the pivot
- To sort the sublists we call quick sort on it recursively. This technique is called the divide and conquer strategy
- Taking the smaller side `[3, 2, 3]` with a pivot of 3,
    - we can divide it into 2 sublists with the left elements less than or equal to the pivot and the right elements greater than the pivot : `[2, 3] [3] []`. Since there are no elements > pivot , its okay for the greater than pivot  sublist to be empty.
    - Since the less than pivot 3 sublist `[2, 3]` still has more than 1 elements,
        - we call quick sort on it again with  pivot as 2.
        - So `[2, 3]` is split into `[] [2] [3]` since there are no elements less than the pivot and 3 is gretaer than the pivot.
        - For the less than pivot 4 part, we’ve hit the base case since all the sublists are single or empty so the recursion stops
        - Then since the sublists are single or empty, their values are returned like merging so `[] [2] [3]`  will be `[2, 3]`
    - And `[2, 3] [3] []` which was `[] [2] [3] [3] []` will be `[2, 3, 3]`
    - So less than pivot 4 is `[2, 3, 3]`
    
- Calling quick sort on sublist greater than pivot :  `[6, 9, 7, 5]` with 6 as the pivot
    - The list is splitted into less than pivot 6 and greater tha pivot 6: `[5] [6] [9,7]`
    - Recursively calling quick sort on the less tha pivot 6 part : `[5]`
        - Since  `[5]` is a single element array, the base case is reached and 5 is returned
    - Calling quick sort again on greater tha pivot 6 : `[9,7]` with pivot of 9
        - `[9, 7]` is split into less than pivot 9 and greater tha pivot 9 : `[7] [9] []`
        - Since we’ve hit the base case: the values are returned so
        - `[9, 7]` is now `[7, 9]`
    - `[5] [6] [9,7]` becomes `[5, 6, 7, 9]`
    - So greater than pivot 4 is `[5, 6, 7, 9]`
- Combining sublist < pivot 4 with the pivot with sublist > pivot 4 we have: `[2, 3, 3, 4, 5, 6, 7, 9]`

## In-place quick sort for pivot as first element

### Algorithm

- Main Function : `quick_sort_in_place` function takes an array of elements as an input  and returns a sorted array
    - Check if the length of the array is less than or equal to 1, if so return the array(since there is no need sorting am empty or single element array)
    - Call the recursive helper function `quickSortRecursive` with the parameters : array, 0(as the low index) and `array.length-1` (as the high index)
    - Return the array
- **Recursive helper function** : `quickSortRecursive` takes an array, low index and high index as input. It doesn’t return anything since we are sorting in place
    - If low is less than high(if there are still at least 2 elements in the array):
        - Partition the array using another helper function `partition` with array, low and high as inputs to get the pivotIndex
        - Recursively sort the subarray elements less than pivot(from low to pivotIndex - 1)
        - Recursively sort the subarray elements greater than pivot (from pivotIndex + 1 to high)
- **Partition helper function**: takes in array, low index and high index as inputs and returns the index of the pivot after partitioning
    - Let the pivot element be the first element of the subarray(array[low])
    - Initialize pointer i to start from index low+1
    - Initialize pointer j to start from high index
    - While i is still less than j(as long as i is not > j do the following):
        - Increment i until an element greater than pivot is found or until i is > j
        - Decrement j until an element less then pivot is found  or until i > j
        - If i < j, swap the elements at i and j
    - Swap the pivot elements with the element at j to place the pivot in the correct sorted position
    - Return the index j where the pivot is now located


- It has been mentioned that the best way to choose a pivot is using the median of 3

### Median of 3Algorithm

1. **Select the pivot**:
    - Identify the first element, the middle element, and the last element of the array (or subarray).
    - Sort these three elements.
    - Choose the median of these three as the pivot.
2. **Partition the array**:
    - Swap the median pivot with the first element of the array to move it to the beginning.
    - Perform the partitioning process as usual, using the first element (now the median pivot) as the pivot.
3. **Recursively sort the subarrays**:
    - Apply the same process recursively to the subarrays formed by partitioning.