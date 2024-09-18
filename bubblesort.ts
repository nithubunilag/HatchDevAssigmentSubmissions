/*const myArray:number[]=[7,12,9,11,3]*/

/*function sort(number:number[]):void{
    for(let i =1; i < number.length; i++){
        let next:number = i +1;
        if(number[i] <number[next])
            number[i]=number[next];
        number[next]=number[i]
    }console.log(number)

    
}

sort([7,12,9,11,3])*/

function sort(numbers: number[]): void {
    const n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                // Swap
                const newNum = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = newNum;
            }
        }
    }
    console.log(numbers);
}

sort([7, 12, 9, 11, 3]);
