# Quick Sort
Quicksort is a sorting algorith commonly used because of its performance and ease of implementation.

### How it Works

1. **Choose a Pivot:**
   - Select any element from the array as the pivot. This can be the first, last, middle, or a random element.

2. **Partitioning:**
   - Rearrange the array so that all elements less than the pivot are on the left side, all elements greater than the pivot are on the right side.
   
3. **Recursion:**
   - Recursively apply the same process to the sub-arrays formed by splitting the array at the pivot's final position. The left sub-array contains elements less than the pivot, and the right sub-array contains elements greater than the pivot.

### Example

Given array: `[4, 3, 1, 5, 2]`

1. **Pivot:** I'll go with the last element which is 2

2. **Partition:** `[1] 2 [4, 3, 5]`

3. **Recursive Application:**
   - Left sub-array: `[1]` (already sorted)
   - Right sub-array: `[4, 3, 5]`
     - Pivot: `5`
     - Partition: `[4, 3] 5`
       - Left sub-array: `[4, 3]`
         - Pivot: `3`
         - Partition: `3 [4]`
           - Right sub-array: `[4]` (already sorted)
        - Recombination: `[3, 4]`
     - Recombination: `[3, 4, 5]`
   - Recombination: `[1, 2, 3, 4, 5]`

- **Time Complexity:** `O(n log n)`
- **Space Complexity:** `O(log n)`

### Advantages

- Generally faster in practice compared to other algorithms
- Sorts in place (efficient memory usage)

### Disadvantages

- Doesn't maintain relative order of equal elements
- Performance will suffer if poor pivot choices are consistently made