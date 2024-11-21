# Quicksort Thought Process

This repository contains a TypeScript implementation of the Quicksort algorithm. Quicksort is a popular and efficient sorting algorithm that follows the divide-and-conquer paradigm.

## Overview

Quicksort works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. This process continues until the base case of an array with one or no elements is reached.

The `quicksort` function takes an array of numbers and returns a sorted array.

If the array has one or no elements `(arr.length <= 1)`, it is already sorted. The function returns the array as-is.

The pivot is chosen as the last element of the array (arr[arr.length - 1]).


Three arrays are initialized: left for elements less than the pivot, right for elements greater than the pivot, and equal for elements equal to the pivot.
The array is iterated through and elements are partitioned into left, right, or equal based on their comparison with the pivot.
Recursive Sorting:

The quicksort function is recursively applied to the left and right sub-arrays.
The sorted left array, equal array, and sorted right array are combined to form the final sorted array.