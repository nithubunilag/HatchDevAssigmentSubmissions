## Quick Sort Algorithm

This is an efficient sorting algorithm based on the divide and conquer principle. It starts by selecting a pivot point which splits the array into two smaller sub-arrays. One the left of the pivot are elements smaller than the pivot value, and on the right are elements greater than it. These sub-arrays are then repeatedly sorted recursively until all the elements are in order.

## Step by Step

Assume an array: [4, 6, 5, 1, 7]. The first step in the quick sort algorithm is to select a pivot point. It's generally common place to pick the ends or middle of the array. 

Let's say the pivot point is at index 2 (i.e. 5), two smaller sub arrays of elements less than and greater than this pivot element are then made:

### First Recursive Step:

1. Pivot element: 5
2. Elements less than pivot: [4, 1]
3. Elements greater than pivot: [6, 7]

### Next steps

1. Recursively sort the sub-arrays by picking a pivot and selecting elements greater than or less than it (i.e. divide).

2. Combine the results of the recursion (i.e. combine).

### Second Recursive Step (left):

1. Pivot element: 1
2. Elements greater than pivot: [4]
3. Elements less than pivot: []
4. Combine step: [1, 4]

### Third Recursive Step (right):

1. Pivot element: 7
2. Elements greater than pivot: []
3. Elements less than pivot: [6]
4. Combine step: [6, 7]

### Fourth Recursive Step (combine):

1. Pivot: 5
2. Left sub-array: [1, 4]
3. Right sub-array: [6, 7]
4. Combination: [1, 4, 5, 6, 7]

### Sorting Complete

Now the elements are sorted and the recursion ends.