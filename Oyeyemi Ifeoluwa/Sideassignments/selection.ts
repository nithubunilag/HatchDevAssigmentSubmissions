const select = [2, 6, 4, 8, 10, 14, 12]

function selectionSort(input: number[]): number[]{
    let set = input.length
    
    for ( let i =0; i< set; i++){
        let minimum = i 
        for (let j = i + 1; j < set; j++) {
            if (input[minimum] > input[j]){
                minimum = j
            }
                
        }
        if (minimum !== i){
            let sell = input[i]
            input[i] = input[minimum]
            input[minimum] = sell
        }
    } return input
    
}
console.log(selectionSort(select))
