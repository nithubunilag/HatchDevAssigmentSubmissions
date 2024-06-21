
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; 
            } else {
                left = mid + 1; 
            }
        } 

        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1; 
            }
        }
    }

    return -1;
}


const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
const index = search(nums, target);
console.log(index);
