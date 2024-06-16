function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    while(left <= right){
        let mid: number = Math.floor((left + right)/2)

        if(nums[mid] == target){
            return mid
        }

        else if(nums[left] <= nums[mid]){
            if(target > nums[mid] || target < nums[left]){
                left = mid + 1
            }
            else{
                right = mid - 1
            }

        }

        else{
            if(target < nums[mid] || nums[right] < target){
                right = mid - 1
            }
            else{
                left = mid + 1
            }
        }

    }

    return -1 

}
