// This matrix represents the image
const insertedImage: number[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 3, 2],
    [0, 3, 7, 5],
  ];

class ImageFlipper{

    constructor(public image: number[][]){};

    flipImage(): number[][] {
        let numRows = this.image.length;
        let numColumns = this.image[0].length;
        let flippedImage: number[][] = [];

        for(let i = 0; i < numRows; i++){
            flippedImage[i] = []
            for(let j = 0; j < numColumns; j++){
                flippedImage[i][j] = this.image[i][numColumns - j - 1];
            }
        }
        return flippedImage;
    }
     
}

const flippedImage = new ImageFlipper(insertedImage);
console.log(flippedImage.flipImage())