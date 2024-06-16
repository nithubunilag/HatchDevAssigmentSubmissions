function flipAndInvertImage(image: number[][]): number[][] {
    const imageFlip: number[][] = [];
    const imageReverse: number[][] = [];

    for (let i = 0; i < image.length; i++) {
        imageFlip.push(image[i].slice().reverse());
    }

    for (let i = 0; i < imageFlip.length; i++) {
        const cache: number[] = [];
        for (let j = 0; j < imageFlip[i].length; j++) {
            const invert = imageFlip[i][j] === 0 ? 1 : 0;
            cache.push(invert);
        }
        imageReverse.push(cache);
    }

    return imageReverse;
}
