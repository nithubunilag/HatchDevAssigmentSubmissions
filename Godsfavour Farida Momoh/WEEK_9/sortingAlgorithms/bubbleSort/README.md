Bubble sort is a sorting algorithm that runs in on*2, it is not very efficient and hence not suitable for large datasets, it sorts the array in place.

To implement bubblesort we need 
i = to track outer loop,
j = to track inner loop,
Initialize both to 0


while i is less than the length of my array;
i want to start from i to the end of my array minus 1 (This calculation is so it does not go through the already sorted part of the array)

    for my inner loop j, it will run while j < n - i - 1
    To makes sure we have an element to compare since the swaping is happening in pairs.

        If we compare two elements and the one before is is greater, then we do the swap
        we just increment j regaardless.
increment i

This continues until the array is completely sorted 
