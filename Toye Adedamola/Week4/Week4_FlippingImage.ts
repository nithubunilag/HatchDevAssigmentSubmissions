function flipAndInvertImage(image: number[][]): number[][]{
    //Flip the image
    for(let i = 0; i < image.length; i++){
        image[i].reverse();
    }

    //Invert the flipped image
    for(let i = 0; i < image.length; i++){
        for(let j = 0; j < image[i].length; j++){
            if(image[i][j] === 0){
                image[i][j] = 1;
            }
            else{
                image[i][j] = 0;
            }
        }
    }
    return image;
}

const myImage: number[][] = [
    [1,1,0],
    [1,0,1],
    [0,0,0]
];
const resultImage = flipAndInvertImage(myImage);
console.log(resultImage)

const mySecondImage: number[][] = [
    [1,1,0,0],
    [1,0,0,1],
    [0,1,1,1],
    [1,0,1,0]
]
const resultImage2 = flipAndInvertImage(mySecondImage);
console.log(resultImage2);
