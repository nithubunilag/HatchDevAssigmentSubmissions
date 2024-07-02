## Quicksort Pseudo Code

Pseudo code for a recursive implementation of quicksort.

1. START
2. Receive an array as the input, low and high bounds
3. Partition the array, set pivot variable to the partition (first, last or center pivot)
4. Initialize another variable i ()
5. Iterate from low up till high
6. In each iteration, check if the current element is less than pivot
7. If true, increment i, swap elements at i and j
8. Else, continue
9. At the end of the iteration, swap the elements at i + 1 with the high bound
10. Return i + 1
11. While low is still less than high, recursively sort the left of pivot (low, pivot - 1) and the right (pivot + 1, high)
12. END
