class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const total = nums.reduce((sum, acc) => sum + acc, 0)

        if (total % 2 !== 0) {
            return false
        }

        const target = total / 2
        const dp = new Array(target+1).fill(false)
        dp[0] = true

        for (const n of nums) {
            for (let i = target; i >= n; i--) {
                dp[i] = dp[i] || dp[i-n]

                if (dp[target]) {
                return true
            }
            }
        }

        return dp[target]
    }
}
// [8,4,3,2] -> 
//20
//1,2,5 -> 

//[2,3,2,4,5] -> 16 -> 11 - 8 -> 
// take 5
// notake 3
// 5 7 11 14,9,-3
// [3,3,4,3,5] -> 10 - 9 -> 1 
// [3,3,4,3,5] -> 10 - 9 -> 1 
//[1,5,11,5] -> 11
//[1,3,5,6,5] -> 15 - 10 -> 5
