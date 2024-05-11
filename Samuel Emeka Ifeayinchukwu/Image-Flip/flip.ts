import { readFileSync, writeFileSync} from "node:fs"
import * as Jimp from "jimp"



class ImageFlipper {

    flip(path: string) {
        Jimp.read(path)
    .then((image) => {
        // Flip the image horizontally
        image.flip(true, false);

        // Save the flipped image
        return image.writeAsync('output.jpg'); // Change this to your desired save path
    })
    .catch((err) => {
        console.error(err);
    })}
    
    // private readImage(path: string): Buffer {
    //     const imageData = readFileSync(path)
    //     return imageData
    // }
    // private async bufferToMatrix(buffer: Buffer): Promise<number[][]> {
    //     try {
    //         const image = await Jimp.read(buffer); 
        
    //         const width = image.bitmap.width;
    //         const height = image.bitmap.height;
    //         const matrix: number[][] = new Array(height);
        
    //         for (let i = 0; i < height; i++) {
    //           matrix[i] = new Array(width);
    //           for (let j = 0; j < width; j++) {
    //             const pixel = image.getPixelColor(j, i);
    //             // Extract color components (RGB or other based on format)
    //             matrix[i][j] = pixel; // Replace with appropriate color channel access
    //           }
    //         }
        
    //         return matrix;
    //       } catch (err) {
    //         console.error('Error reading image:', err);
    //         throw err;
    //       }
    // }

}

const flipper = new ImageFlipper()
flipper.flip("input.jpg")

