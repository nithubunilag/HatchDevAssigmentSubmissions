/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */
// Utility swap function
export default function swap<T>(array: T[], a: number, b: number) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
