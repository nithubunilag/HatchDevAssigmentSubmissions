function flipAndInvertImage(image: number[][]): number[][] {
    let flippedImage: number[][] = [];

    for (let i:number = 0; i < image.length; i++){
        let tempArray: number[] = []
        for (let j:number = 0; j < image[i].length; j++){
            if (image[i][j] === 0){
                tempArray.unshift(1)
            }else{
                tempArray.unshift(0)
            }
        }
        flippedImage.push(tempArray)
    }
    return flippedImage

};