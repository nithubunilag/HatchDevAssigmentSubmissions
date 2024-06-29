function flipImageHorizontal(image: HTMLImageElement): HTMLCanvasElement {

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('Unable to get 2D rendering context');
    }

    // Set canvas size to match image size
    canvas.width = image.width;
    canvas.height = image.height;

    // Flip the image horizontally
    ctx.translate(image.width, 0);
    ctx.scale(-1, 1);

    // Draw the image onto the canvas
    ctx.drawImage(image, 0, 0);

    // Create a new image element from the canvas
    const flippedImage = new Image();
    flippedImage.src = canvas.toDataURL();

    return canvas;
}

// Example usage
const img = new Image();
img.src = 'path/to/your/image.jpg';
img.onload = () => {
    const flippedCanvas = flipImageHorizontal(img);
    document.body.appendChild(flippedCanvas);
};



// this is the link to my leetcode solution 
// https://leetcode.com/problems/flipping-an-image/submissions/1261578095/

// the code to the solution

/* function flipAndInvertImage(image: number[][]): number[][] {
  const n = image.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      // Flip horizontally and invert the values
      [image[i][j], image[i][n - j - 1]] = [
        image[i][n - j - 1] ^ 1,
        image[i][j] ^ 1,
      ];
    }
  }

  return image;
}

// Example usage
const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0]
];

console.log("Original Image:");
console.log(image);

const result = flipAndInvertImage(image);

console.log("Flipped and Inverted Image:");
console.log(result); */
