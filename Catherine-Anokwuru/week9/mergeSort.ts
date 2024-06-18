function mergeSort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums
    }
    const mid = Math.floor(nums.length / 2)
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
};

function merge(left: number[], right: number[]) {
    const result: number[] = []
    let li = 0
    let ri = 0

    while (li < left.length && ri < right.length) {
        if (left[li] <= right[ri]) {
            result.push(left[li])
            li++
        } else {
            result.push(right[ri])
            ri++
        }
    }
    return result.concat(left.slice(li).concat(right.slice(ri)))
}

const arr = [5,2,3,1,8,6,9];
console.log(mergeSort(arr));