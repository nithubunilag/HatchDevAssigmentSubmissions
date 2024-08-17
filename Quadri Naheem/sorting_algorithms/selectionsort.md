# Selectionsort pseudocode

Get the list of numbers you want to sort and the total count of these numbers.
For each number in the list (the outer loop):
    a. Assume the current number is the smallest in the unsorted part of the list.
    b. Check each of the remaining numbers to find the smallest one.
    c. If a smaller number is found, remember its position.
    d. Swap the smallest number found with the current number.
Repeat this process until the entire list is sorted.
Return the sorted list