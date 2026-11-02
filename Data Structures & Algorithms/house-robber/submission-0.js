class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }

        const dp = Array(nums.length).fill(0);

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        }

        return dp[dp.length - 1];
    }
}

//dp = 2 9 10 12 16

// 10 1 1 10 -> 10 10 11 20
//[1,1,3,3]
// 1 1
