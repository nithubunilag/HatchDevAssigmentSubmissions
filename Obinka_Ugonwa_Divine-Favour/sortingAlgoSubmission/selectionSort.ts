// Name: Obinka Ugonwa Divine-Favour
// email: divneobk@gmail.com

const SelectionSort = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++){
        let minIndex = i
        for(let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]){
                [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]]
            }
        }
    }
    console.log(arr)
}


let myArr = [6, 2, 5, 3, 9]
SelectionSort(myArr)



const BubbleSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log(arr)
}

let myArr1 = [15, 7, 2, 8, 5]
BubbleSort(myArr1)

const InsertionSort = (arr: number[]) => {
    for (let i = 1; i < arr.length; i++){
        let key = arr[i]
        let j = i - 1

        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = key
    }
    console.log(arr)
}

let myArr2 = [8, 4, 6, 10, 3]
InsertionSort(myArr2)