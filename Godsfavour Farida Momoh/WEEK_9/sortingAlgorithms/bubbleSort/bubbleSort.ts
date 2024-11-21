function swap_b(arr:number[], idx1:number, idx2:number):void{
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleSort(arr:number[]):void{
    let n = arr.length
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 ; j++){
            if(arr[j] > arr[j + 1]){
                swap_b(arr, j, j+1)
            }
        }
    }

}
