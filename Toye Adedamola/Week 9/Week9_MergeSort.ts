function mergeSort(array, low, high){
    if(low >= high ){
        return array;
    }
    let mid = Math.floor((low + high)/ 2);
    mergeSort(array, low, mid);
    mergeSort(array, mid+1, high);
    mergeI(array, low, mid, high)

}
function mergeI(arr, low,mid, high){
    let leftLength = mid - low + 1
    let rightLength = high - mid;
    let leftArr = new Array(leftLength);
    let rightArr = new Array(rightLength);
    
    for(let i = 0; i < leftLength; i++){
        leftArr[i] = arr[low + i]
    }

    for(let j = 0; j < rightLength; j++){
        rightArr[j] = arr[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = low;

    //While there are elements in both right and left
    while(i < leftLength && j < rightLength){
        if(leftArr[i] <= rightArr[j]){
            arr[k] = leftArr[i];
            i++;
        }
        else{
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    //While there are elements in left array
    while(i < leftLength){
        arr[k] = leftArr[i]
        i++;
        k++;
    }

    //While there are elements in the right array
    while(j < rightLength){
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

const goals = [7, 8, 2, 5];
let sortedGoals = mergeSort(goals, 0, goals.length-1);
console.log(goals)