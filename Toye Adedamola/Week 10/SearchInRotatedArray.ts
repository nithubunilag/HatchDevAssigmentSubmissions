function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target){
            return mid;
        }
         
        if(nums[left] <= nums[mid]){
            //If Left side is sorted
            if(nums[left] <= target && target < nums[mid]){
                right = mid-1;
            }
            else{
                left = mid+1;
            }
        }
        else{
            //If right side is sorted
            if(nums[mid] < target && target <= nums[right]){
                left = mid+1;
            }
            else{
                right = mid-1;
            }
        }
    }
    return -1
};