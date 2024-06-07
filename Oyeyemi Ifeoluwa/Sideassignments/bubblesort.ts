const list = [1, 3, 2, 5, 4, 6]

function bubbleSort(input: number[]): number[] {

    let sort = list.length

    for ( let i = 0; i< sort; i++){
        for( let j = 0; j < sort - i -1; j++){
            if(input[j] >input[j + 1] ){
                let arr = input[j]
                input[j] = input[j+ 1]
                input[j+1] = arr
            }
        }

    }
    return input
}
console.log(bubbleSort(list))