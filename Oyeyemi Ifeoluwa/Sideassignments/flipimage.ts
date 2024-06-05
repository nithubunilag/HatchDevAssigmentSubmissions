const flip = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]

function Flip(image: number[][]): number[][] {

    let reverse = image.reverse()


    for (let i = 0; i< reverse.length; i++){
        for(let j = 0; j < reverse[i].length; j++){

            if ( reverse[i][j] === 0) {
                reverse[i][j] = 1
            } else{
                reverse[i][j] = 0
            }
        }
    }
    return reverse
};

console.log(flip)
console.log(Flip(flip))

