const scores = [10, 30, 40, 50, 70, 80, 90, 100]
const sorted_scores = [40, 60, 75, 88, 90]
const target = 80;

function linearSearch(input : number[], target: number): number{
    for (let i = 0; i <= input.length; i++) {
        const currentElement = input[i];
        if (currentElement == target) {
            return i
        }

    }
    return -1
}



function binary_search(input: number[], target: number) {
    let highIdx = input.length - 1;
    let lowIdx = 0;
    let midIdx;

    for(let i = 0; i < input.length; i++) {
        midIdx = Math.floor((highIdx + lowIdx) / 2)
        const middleElement = input[midIdx]

        if (middleElement == target) {
            return midIdx;
        } else if (middleElement < target) {
            lowIdx = midIdx + 1;
        } else if (middleElement > target) {
            highIdx = midIdx - 1;
        }


    }

    return -1;
}

const idx = linearSearch(scores, target)
const result = binary_search(scores, target)
console.log("binary search =  " + result);
//console.log(idx);