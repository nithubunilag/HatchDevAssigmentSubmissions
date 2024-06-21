export function swap<T>(array: T[], index1: number, index2: number){
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}