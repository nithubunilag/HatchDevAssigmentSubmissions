// NAME :>      EZIKE JESSICA
//EMAIL :>      jessicaezike.je@gmail.com

////////////SELECTION ALGORITHM
/// sorting starts from the front to the back

const SelectionSort = (arr: number[]) => {
    for(let i = 0; i < arr.length - 1; i++) {
        let minindex = i
        for(let j = i+1 ; j < arr.length; j++) {
            if(arr[j] < arr[minindex]) {
                [arr[j], arr[minindex]] = [arr[minindex], arr[j]]
            }
        }
    }
    console.log(arr);
}
//////const swap = (i, j)    implement a swap funtion

const arr = [3, 6, 8, 10, 1, 2, 1];
console.log('Original arr:', arr);
SelectionSort(arr);



//////////////BUBBLE SORT
/// sorting is starting from the back to the front

const bubbleSort = (arr: number[]) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0 ; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log(arr)
}

const arr1 = [7,2,8,5];
console.log('Original arr1:', arr1);
bubbleSort(arr1);


/////////////INSERTION SORT


const InsertionSort = (arr: number[]) => {
    for(let i = 1; i < arr.length; i++) {
        let k = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > k) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = k
    }
    console.log(arr)
}

const arr2 = [7,2,8,5];
console.log('Original arr2:', arr2);
bubbleSort(arr2);