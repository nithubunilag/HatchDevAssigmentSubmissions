const scores = [76, 87, 65, 68, 70, 78, 69, 90];
const target = 90;

function linearSearch(input: number[], target: number): number {
    for (let i = 0; i < input.length - 1; i++) {
        const currentElement = input[i];
        if (currentElement == target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(scores, target));

/*
const scores = [76, 87, 65, 68, 70, 78, 69, 100, 96];
const target = 90;

function linearSearch(array: number[], target: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(scores, target));
*/
