function merge_sort(array){
    //Sort a list in ascending order
    //This function returns a new sorted list

    //Divide: Find the midpoint of the list and divide into sublists
    //Conquer: Recursively sort the sublist created in previous step
    //Combine: Merge the sorted sublist created in previous step


    //If list has 0 or 1 element return that list
    if(array.length <= 1){
        return array;
    }

    const [left_half, right_half] = split(array); 
    let left: number[] = merge_sort(left_half);  //recursion
    let right = merge_sort(right_half);

    return merge(left, right); 
}

function split(array){
    //Divide the unsorted list at midpoint into sublists
    //Returns 2 sublists : left and right

    let midpoint = Math.floor(array.length / 2);
    let  left = array.slice(0, midpoint)
    let right = array.slice(midpoint);
    return [left, right]
}

function merge(left: number[], right: number[]){
    //Merge 2 arrays, sorting them in the process
    //Return a new merged list
    let sortedArray: number[] = [];
    let i = 0;  // for index in left list
    let j = 0;  // for index in right list

    while( i < left.length && j < right.length){
        if(left[i] < right[j]){
            sortedArray.push(left[i]);
            i++;
        }
        else{  //if left[i] >= right[i]
            sortedArray.push(right[j]);
            j++;
        }
    }

    //Where the right list is shorter than the left
    while(i < left.length){
        sortedArray.push(left[i]);
        i++;
    }

    //Where the left list is shorter than the right
    while(j < right.length){
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;

}

const myArray = [5, 4, 3, 2, 1];
const sortedArray = merge_sort(myArray);
console.log(sortedArray);