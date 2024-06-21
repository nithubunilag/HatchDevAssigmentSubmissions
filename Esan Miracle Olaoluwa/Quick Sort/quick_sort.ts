// Esan Miracle Olaoluwa
// miracleesan7@gmail.com
// MiracleDev0

function swap_q(arr:number[], idx1:number, idx2:number):void{
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


function partiton(arr:number[], p:number, r:number):number{
    let i = p - 1

    let pivot = arr[r]
    
    for(let j = p; j < r ; j++){
        if(arr[j] <= pivot){
            i++
            swap_q(arr, i, j)
        }
    }

    swap_q(arr, i+1, r)

    return i+1
}

function quickSort(arr:number[], p:number, r:number){
    if (p < r){
        let partitonIdx = partiton(arr, p, r)
        quickSort(arr, p, partitonIdx - 1)
        quickSort(arr, partitonIdx+1, r)
    }
}

let unsortedArray = [5,3,1,8,7,4]
console.log(unsortedArray)
quickSort(unsortedArray, 0, unsortedArray.length -1)
console.log(unsortedArray)