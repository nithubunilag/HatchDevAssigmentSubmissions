# Quick sort

Quicksort is a divide-and-conquer sorting algorithm. It works by:

1. Choosing a pivot: This is an element from the array. It can be any element, but commonly the first or last element is chosen.
2. Partitioning: Rearrange the array such that elements less than the pivot are placed before it, and elements greater than or equal to the pivot are placed after it.
3. Recursion: Recursively sort the two sub-arrays created by the partitioning step (elements less than the pivot and elements greater than or equal).

Imagine sorting a deck of cards. You can pick a card as the pivot (say, the Queen of Hearts). Then, move all cards less than the Queen (Jacks, Tens, etc.) to its left, and all cards greater than or equal (Kings, Aces) to its right. Finally, sort the two piles (left and right) independently.