function partition(arr: number[], p: number, r: number){
    //p = 0;
    //r = arr.length - 1;
    let i = p - 1;
    let pivot = arr[r];
    for(let j = p; j <= r - 1; j++){
        if(arr[j] <= pivot){
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;
    return i + 1
}

function quickSort(arr, p = 0, r = arr.length - 1){
    if(p < r){
        let part = partition(arr, p, r);
        console.log(arr)
        quickSort(arr, p, part - 1);
        quickSort(arr, part + 1, r)
    }

}

let arr = [5, 3, 1, 8, 7, 4];
quickSort(arr);
console.log(arr);