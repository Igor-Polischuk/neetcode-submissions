class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = nums[0];
        let res = nums[0];

        for (let i = 1; i < nums.length; i++) {
            currSum = Math.max(nums[i], nums[i] + currSum)
            res = Math.max(res, currSum)            
        }

        return res;
    }
}
//nums = [2,-3,4,-2,2,1,-1,4]
//
