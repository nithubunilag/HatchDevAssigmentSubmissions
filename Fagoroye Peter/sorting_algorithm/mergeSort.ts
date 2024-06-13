function merge(arr: number[], left: number[], right: number[]){
    console.log('Merging:', 'left:', left, 'right:', right);
    let numberOfLeftArr = left.length;
    let numberOfRightArr = right.length;

    let i = 0;
    let j = 0;
    let k = 0;

    while(i < numberOfLeftArr && j < numberOfRightArr){
        if(left[i] <= right[j]){
            arr[k] = left[i]
            i++;
        }else{
            arr[k] = right[j];
            j++
        }
        k++
    }
    while(i < numberOfLeftArr){
        arr[k] = left[i];
        i++;
        k++
    }
    while(j < numberOfRightArr){
        arr[k] = right[j];
        j++;
        k++
    }

}

// The Merge sort function

function merge_sort(arr: number[]){
    console.log('Sorting:', arr);
    let n = arr.length;
    if(n < 2){
        return;
    }
    let middle = Math.floor(n / 2);
    let left = new Array(middle);
    let right = new Array(n - middle);

    for(let i = 0; i < middle  ; i++){
        left[i] = arr[i];
    }
    for(let j = middle; j < n ; j++){
        right[j - middle] = arr[j];
    }

    merge_sort(left);
    merge_sort(right);
    merge(arr, left, right)
}

let array = [5, 3, 1, 8, 7, 4];
merge_sort(array)
console.log("Sorted Array:", array);