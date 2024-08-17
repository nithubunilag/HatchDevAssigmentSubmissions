# Bubblesort pseudocode

Get the list of numbers you want to sort and the total count of these numbers.
For each number in the list (this the outer loop):
    a. Compare each pair of adjacent numbers in the list, one by one (this is the inner loop).
    b. If the number on the left is bigger than the number on the right, swap them.
Repeat this process for each number in the list, but skip the last sorted numbers after each outer loop iteration since they are already in the right place.
When you have gone through the list as many times as there are numbers, the list will be sorted.
Return the sorted list
