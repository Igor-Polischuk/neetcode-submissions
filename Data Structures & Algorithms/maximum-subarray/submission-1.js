class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = 0;
        let res = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            if (currSum === 0 && nums[i] < 0) {
                res = Math.max(res, nums[i])
            }else if (nums[i] < 0 && Math.abs(nums[i]) > currSum) {
                currSum = 0
            } else {
                currSum += nums[i]
                res = Math.max(currSum, res);
            }

            
        }

        return res;
    }
}
//nums = [2,-3,4,-2,2,1,-1,4]
//
