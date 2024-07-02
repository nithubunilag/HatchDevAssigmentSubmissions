// Utility swap function
export default function swap<T>(array: T[], a: number, b: number) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
