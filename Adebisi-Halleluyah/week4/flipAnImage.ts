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
