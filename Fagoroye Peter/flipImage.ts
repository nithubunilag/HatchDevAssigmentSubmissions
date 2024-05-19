function flipAndInvertImage(image: number[][]): number[][] {
    const n = image.length;
    for(let i = 0; i < n; i++){
        image[i] = image[i].reverse().map(function inverseBit(bit): number{ bit = bit === 1 ? 0 : 1; return bit});
    }
    return image;
    
};
const image = [[1,1,0], [1,0,1], [0,0,1]];
console.log(flipAndInvertImage(image));