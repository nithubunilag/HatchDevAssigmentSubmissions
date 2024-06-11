# Pseudo-code for Merge-Sort Algorithmm

<!-- Create a merge sorting function that takes up an unsorted-array as a parameter-->
FUNCTION mergeSort(array)
    <!--if the array is empty  -->
    IF length of array <= 1
        RETURN array
    <!-- find the mid index  -->
    mid = FLOOR(length of array / 2)
    <!--Recursively divide the array and subarrays -->
    leftHalf = SUBARRAY of array from 0 to mid
    rightHalf = SUBARRAY of array from mid to end
    <!-- Recursively merge the subarrays -->
    sortedLeft = mergeSort(leftHalf)
    sortedRight = mergeSort(rightHalf)
    <!-- return both merged array -->
    RETURN merge(sortedLeft, sortedRight)

<!-- Creare a merge function -->
FUNCTION merge(leftArray, rightArray)
    result = EMPTY ARRAY
    i = 0
    j = 0
    <!-- Iterate through and compare both left and right arrays to append the lower element into an empty array (result) -->
    WHILE i < length of leftArray AND j < length of rightArray:
        IF leftArray[i] < rightArray[j]:
            APPEND leftArray[i] to result
            i = i + 1
        ELSE:
            APPEND rightArray[j] to result
            j = j + 1

    APPEND remaining elements of leftArray from i to end to result
    APPEND remaining elements of rightArray from j to end to result

    RETURN result
<!-- define the unsorted-array and print the sorted-array -->
unsortedArray = [33, 17, 26, 10, 15, 23, 55, 13]
sortedArray = mergeSort(unsortedArray)
PRINT "Sorted array:", sortedArray