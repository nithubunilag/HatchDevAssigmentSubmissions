// the function takes in only 0s and 1s
// It takes in nxn matrix, flips and inverts it
// the unshift method inverts the element in each subarray and adds it to the beginning of a temporary array; this inverts and flips it at the same time 
function flipAndInvertImage(image: number[][]): number[][] {
    // initializing the flipped image variable
    let flippedImage: number[][] = [];

    // need to iterate over the array to select each subarray
    for (let i:number = 0; i < image.length; i++){
        // creating a temp array that holds the inverted array elements that's unshifted
        let tempArray: number[] = []
        // iterate over the elements in each subarray
        for (let j:number = 0; j < image[i].length; j++){
            if (image[i][j] === 0){
                tempArray.unshift(1)
            }else{
                tempArray.unshift(0)
            }
        }
        // the temp array is appended to the flipped image array as subarrays
        flippedImage.push(tempArray)
    }
    return flippedImage

};