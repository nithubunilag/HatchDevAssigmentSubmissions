function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            // Left part is sorted
            nums[left] <= target && target < nums[mid]
                ? (right = mid - 1)
                : (left = mid + 1);
        } else {
            // Right part is sorted
            nums[mid] < target && target <= nums[right]
                ? (left = mid + 1)
                : (right = mid - 1);
        }
    }

    return -1;
}
