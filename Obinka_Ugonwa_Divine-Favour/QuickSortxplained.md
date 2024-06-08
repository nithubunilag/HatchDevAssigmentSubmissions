# My Understanding of Quick Sort 
Quick Sort is based on the Divide and conquer algorithm technique.
It involves picking a pivot and partitioning the array about that pivot. 

# How it works
It puts the pivot in its sorted position and partitions the array
Elements lesser than the pivot moves to its left
Elements greater than the pivot moves to its right

we create a partition() function and call it in the quickSort() function
we call the quickSort() function recursively for bothe the first half and second half of the divided array