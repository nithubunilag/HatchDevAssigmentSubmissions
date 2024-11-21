// NAME :>      EZIKE JESSICA
//EMAIL :>      jessicaezike.je@gmail.com

function flipAndInvertImage(image: number[][]): number[][] {
    let flippedImage: number[][] = []
    

    for(let i=0; i<image.length; i++) {
        let container: number[] = []

        for(let j=0; j<image[i].length; j++) {
            if(image[i][j] === 0) {
                container.unshift(1)
            }
            else {
                container.unshift(0)
            }
        }
        
        flippedImage.push(container)
    }

    return flippedImage;
};

console.log(flipAndInvertImage([[0,0,1], [0,1,0], [0,1,1]]))