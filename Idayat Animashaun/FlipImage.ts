function flipAndInvertImage(image: number[][]): number[][] {
    const n = image.length;
     
     for (let i = 0; i < n; i++) {
         // Reverse each row
         for (let j = 0; j < Math.floor(n / 2); j++) {
             [image[i][j], image[i][n - 1 - j]] = [image[i][n - 1 - j], image[i][j]];
         }
         
         // Invert each row
         for (let j = 0; j < n; j++) {
             image[i][j] = image[i][j] === 1 ? 0 : 1;
         }
     }
     
     return image; 
 };
 