## Pseudo-Code for Selection Sort
1. For i from 0 to n-1
2.    Assume the element at 'i' is the smallest in the unsorted part of the array
3.    For j from i+1 to n
4.        If the element at 'j' is less than the element at 'i'
5.            Swap the element at 'i' with the element at 'j'
6. DONE

## Pseudo-Code for Bubble Sort
1. For i from 0 to n-1
2.    For j from 0 to n-i-1
3.        If the element at 'j' is greater than the element at 'j+1'
4.            Swap the element at 'j' with the element at 'j+1'
5. DONE

## Pseudo-Code for Insertion Sort
1. For i from 1 to n-1
2.    Set the key to the element at 'i'
3.    Set j to i-1
4.    While j is greater than or equal to 0 and the element at 'j' is greater than the key
5.        Move the element at 'j' to 'j+1'
6.        Decrement j by 1
7.    Move the key to 'j+1'
8. DONE