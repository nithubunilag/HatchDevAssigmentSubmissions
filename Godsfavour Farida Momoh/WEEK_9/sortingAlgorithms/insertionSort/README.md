<!-- farimomoh@gmail.com
    Farida Momoh
-->
This took a bit of time to understand but once i figured it out, i thought the implementation marvelous, so what insertion sort does is
Iterates the lenght of the array and for every iteration chooses a key, 
    key = arr[i]
    we have a pointer that is ahead of our key position by 1 i.e say i is our position then j; pointer = i - 1
    Under our constraints of while j >= 0 and arr[j] > key,
        we shift by our element by 1 i.e j+1 = j and decrement j

    Once done then we put the key at the position of j+1
    increase i by 1 to reassign a new key

This continues till we have looped through the entire array.

```
let arr = [5,4,3,2,1]
/**
  i = 1, j = 0, key = 4
 * yes 5 is greater than so j+1 = j
 * [5,5,3,2,1] , j- 1 = -1
 * j+1 = key so [4,5,3,2,1]
 * 
 * i = 2, j = 1, key = 3
 * [4,5,3,2,1] is 5 geater than 3, yes [4,5,5,2,1]
 * j-1 = 0
 * is 4 greate than 3, yes [4,4,5,2,1], j-1 = -1
 * j+1 = key [3,4,5,2,1]
 * 
 * i = 3, j = 2, key = 2
 * [3,4,5,2,1]- is 5 greater than 2, yes 
 * so j+ = j -> [3,4,5,5,1] 
 * j-1 = 1
 * is 4 greater than 2?, yes so shift position j+1 = j -> [3,4,4,5,1]
 * j-1=0
 * is 3 greater than 2, yes so shift j + 1 = j [3,3,4,5,1]
 * j-1=-1
 * 
 * j+1 = key [2,3,4,5,1]
 * 
 * i = 4, j = 3
 * key = 1
 * [2,3,4,5,1] is 5 greater than 1, yes -> [2,3,4,5,5] j-1 = 2
 * is 4 gretare than 1, yes -> [2,3,4,4,5] j-1 = 1
 * is 3 greater than 1, yes -> [2,3,3,4,5] j-1 = 0
 * is 2 gretaer than 1, yes -> [2,2,3,4,5] j - 1 = -1
 * 
 * j+1 = key
 * [1,2,3,4,5]
```
