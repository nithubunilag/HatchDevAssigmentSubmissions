// NAME :>      EZIKE JESSICA
//EMAIL :>      jessicaezike.je@gmail.com



///////////////////////Sudo Code for the discused sorthing algorithms

    Sorting Algoritms are ways to arrange the elements contained in an array

1)  Selection sorthing
    This involes selecting the smallest or bigest element from the array and placing
it or swaping it.
Steps=>
i.  starting from the very firt element, we select the index as our min index
ii. then we compare the next element in the array with the first, if is less we swap if not,
we compare the 3rd elemnt in the array with the first.
iii.This comparism will go on to the end of the array
iv. then the second index elemnt in the array will now be our midIndex, which we will compare all the elements
from the hird to the end with it.

Example Case
Taken the array of 2,5,8,7,3
=> our midIndex is 0 carring the value of 2
=> Then we compare the second value 5 with 2
=> Since it is not less than 2, no swapping occures
=> Then we compare the third value 8 with 2, where no swapping occures
=> then we compare the fourth value 7 with 2, nop swapping
=> same with comparing with 3
=> noew our mid index is 1 which carries the value 5
=> We compare 8 with 5, no swaping
=> We compare 7 with 5, no swaping
=> we compare 3 with 5, then we swap

=>>>> we now have 2,3,8,7,5
=> Now our minIndex is 2 which holds the value of 8
=> we will use 8 to compare 7, then we swap cause 7 is smaller than 8

=>>>> we now have 2,3,7,8,5
=> we now compare 7 with 5 because 7 is is the value in our midIndex, then we swap

=>>>> we now have 2,3,5,8,7
=> Now our midIndex is 3 carring the value 8
=> Using 8 to compare 7,7 is less then 8 so we swap 
giving us the final orted algorthm as =>>>> 2,3,5,7,8



3)  Bubble Sorting

Example Case
Taking the example above 2,5,8,7,3
=> Start with the first element 2 and compare it with the next element 5. Since 2 is not greater than 5, no swaping
=> Move to the next pair 5 and 8. Since 5 is not greater than 8, no swap is needed.
=> Move to the next pair 8 and 7. Since 8 is greater than 7, swap them to get 
=>>>>>  [2, 5, 7, 8, 3].

=> Move to the next pair 8 and 3. Since 8 is greater than 3, swap them to get
=>>>>>  [2, 5, 7, 3, 8].

=> Start again from the first element 2 and compare it with the next element 5. Since 2 is not graetern 5, no swaping.
=> Move to the next pair 5 and 7. Since 5 is not greater than 7, no swap is needed.
=> Move to the next pair 7 and 3. Since 7 is graeter than 3, swap them to get
=>>>>>  [2, 5, 3, 7, 8].
=> wwe wil stop here for this pass cause the last two numbers are sorted already

=> Start again from the first element 2 and compare it with the next element 5. Since 2 is not graeter than 5, no swaping.
=> Move to the next pair 5 and 3. Since 5 is graeter than 3, swap them to get
=>>>>>  [2, 3, 5, 7, 8].

=> Start again from the first element 2 and compare it with the next element 3. Since 2 is not graetyer than 3, no swap is needed.
Since there are no more pairs to compare, the array is sorted.



3) Insertion Sorting

Example Case
    [2, 5, 8, 7, 3]

=>The first element 2 is considered sorted. Move to the second element 5.
=> Consider the element at index 1 : which is 5 as your current
=> Compare 5 with 2. Since 2 is not greater than 5, no swaping is needed.
=> Consider the element at index 2 : which is 8 as yor new current
=> Compare 8 with 5. Since 8 > 5, no swaping is needed.
=>>>>>  [2, 5, 8, 7, 3]

=> Consider the element at index 3 : which is 7
=> Compare 7 with 8. Since 7 < 8, swap 8 to the right.
Compare 7 with 5. Since 7 > 5, place 7 after 5.
=>>>>>  [2, 5, 7, 8, 3]

=> Consider the element at index 4 : which is 3
=> Compare 3 with 8. Since 3 < 8, swap 8 to the right.
=> Compare 3 with 7. Since 3 < 7, swap 7 to the right.
=> Compare 3 with 5. Since 3 < 5, swap 5 to the right.
=> Compare 3 with 2. Since 3 > 2, place 3 after 2.
=>>>>>  [2, 3, 5, 7, 8]
