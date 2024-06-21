function Ssort(arr: number[]){
    let c = arr.length

    for ( let i = 0; i < c - 1; i++){
        let minindex = i 
         for ( let j = i + 1 ; j < c; j++ ){
            if (arr[j] < arr[minindex]){
                minindex = j;

            }
            if (minindex !== i){
                arr[i] = arr[minindex]
            }
         }
    }

    return arr;
}

const arr_for_ss = [33,332,22,3,67,8]
console.log("the sorted array by Selectionsort is: ", Ssort(arr_for_ss))