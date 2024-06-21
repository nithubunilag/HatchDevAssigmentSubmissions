function insert(number:number[]):number[]{
    const num = number.length;
    
    for(let i=1; i < num; i++){
        let current = number[i];
        let j= i-1
        while(j >=0 && number[j] > current){
            number[j +1] =number[j];
            j--;
        }

        number[j +1]= current;
    }
    return number;
}


const array=[23, 45,65,32,21,12,89,9]
const inserted = insert(array)
console.log(inserted)