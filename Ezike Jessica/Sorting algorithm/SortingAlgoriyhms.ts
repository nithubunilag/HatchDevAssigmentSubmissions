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


//////////////////////////QUICK SORT

const partition = (arr:number[], low, high) => {
    let pivot = arr[high]
    let i = low - 1

    for(let j = low; j <= high - 1; j++) {
        if(arr[j] < pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
}

const QuickSort = (arr, low, high) => {
    if (low < high) {
        let par = partition(arr, low, high)

        QuickSort(arr, low, par - 1)
        QuickSort(arr, par + 1, high)
    }
}

//example
let arr3 = [10, 7, 8, 9, 1, 5];
console.log("Original array:", arr3);
QuickSort(arr3, 0, arr3.length - 1);
console.log("Sorted array:", arr3);



////////////////MERGE SORT

const Merge = (arr, low, middle, high) => {
    // creating two arrays , 1 for the elements at the left of the mid and the other for the right of the mid
    //index of the last element (high) is 5
    // index of the middle is 2
    // index of the first element (low) is 0
    let numOfLeftArr = middle - low + 1
    let numOfRightArr = high - middle

    /// your left and right array
    let LeftArr = new Array(numOfLeftArr)
    let RightArr = new Array(numOfRightArr)

    for (let i = 0; i < numOfLeftArr; i++) {
        LeftArr[i] = arr[low + i]
    }
    for (let j = 0; j < numOfRightArr; j++) {
        RightArr[j] = arr[middle + 1 + j]
    }
    
    let i = 0
    let j = 0
    let k = low

    while(i < numOfLeftArr && j < numOfRightArr) {
        if(LeftArr[i] <= RightArr[j]) {
            arr[k] = LeftArr[i]
            i += 1
        }

        else {
            arr[k] = RightArr[j]
            j++
        }
        k++
    }

    while (i < numOfLeftArr) {
        arr[k] = LeftArr[i]
        i++
        k++
    }

    while (j < numOfRightArr) {
        arr[k] = RightArr[j]
        j++
        k++
    }
}

const MergeSort = (arr, p, q) => {
    if(p >= q) {
        return arr
    }
    let m = p + Math.floor((q - p)/2)
    MergeSort(arr, p, m)
    MergeSort(arr, m + 1, q)
    Merge(arr, p, m, q)
}

//example
let arr4 = [ 15, 11, 3, 5, 6, 17 ]
console.log("Original array", arr4)
MergeSort(arr4, 0, arr4.length - 1)
console.log("Sorted array", arr4)


