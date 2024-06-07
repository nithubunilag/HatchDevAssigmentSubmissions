function swapEl(arr:number[], idx1:number, idx2:number):void{
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function selectionSort(arr:number[]){

    for(let i=0; i < arr.length; i++){
        let minIdx = i
        let j = i + 1
        while(j < arr.length){
            if (arr[minIdx] > arr[j]){
                minIdx = j
            }
            j++
        }
        if (minIdx != i){
            swapEl(arr, i, minIdx)
        }
    }
}
