Selection sort is a sorting algorithm that works by finding the min element in the unsorted portion of the array and comparing it with the current position value.

First starting an outer loop i = 0 < arr.length
choosing a minimum idx; i which is then compared with the rest of the elements in the array using a inner loop. j = i + 1 < arr.length
On finding a element the value of minimum idx changes,j++
When the inner loop is finished running, a comparison is made to see if i == minIdx, if no then we swap values of arr[i] and arr[minIdx] and increment i
This process is done till the array is completely sorted.
