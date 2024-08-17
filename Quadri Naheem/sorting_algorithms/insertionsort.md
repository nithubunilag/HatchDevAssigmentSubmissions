# Insertionsort pseudocode

Get the list of numbers you want to sort and the total count of these numbers.
Assume the first number is already sorted.
For each remaining number in the list (starting from the second one):
    a. Take the current number and compare it to the numbers in the sorted part of the list (to the left).
    b. Move each number in the sorted part one position to the right until you find the correct spot for the current number.
    c. Insert the current number into its correct spot.
Repeat this process until the entire list is sorted.
Return the sorted list