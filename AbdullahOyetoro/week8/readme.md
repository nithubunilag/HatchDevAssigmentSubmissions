1. I pass in the array that i want to sort and the function takes in 3 arguments
arr: the array to be sorted
start:the index of the  first element in the array which is 0 by default 
end: which is the last element of the array which is by default equal to the length of the array-1

2. Inside the quicksort function theres a function Partiton that helps divide the function into 2 parts the i.e elements less than the array on the left and element s greater than the pivot on the right

note: the pivot element can be any random variable in the list but i chose the pivot to be the same as the last elemnt in the list

3. the partition function takes three parameters (arr,start,end) same as the quicksort parameters except they dont have default values

4. I initialize the pivot element and iterate through the arrray putting elements less than the pivot in the right and elements greater in the right while sorting the array in place

5. Finally, I recursively call quicksort on the left and rigtht subarrays before and after the pivot element after partiotionning

process repeats itself until the array is finally sorted itself.