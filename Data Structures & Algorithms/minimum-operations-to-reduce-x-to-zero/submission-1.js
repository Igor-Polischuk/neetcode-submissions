class Solution {
    /**
     * @param {number[]} nums
     * @param {number} x
     * @return {number}
     */
    minOperations(nums, x) {
        const sum = nums.reduce((acc, curr) => acc + curr, 0)
        const target = sum - x

        let currSum = 0
        let maxWindow = -1
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            currSum += nums[right]

            while (currSum > target && left <= right) {
                currSum -= nums[left]
                left++
            }

            if (currSum === target) {
                maxWindow = Math.max(right - left + 1, maxWindow)
            }
        }


        return maxWindow === -1 ? -1 : nums.length - maxWindow
    }
}

// [2,5,1,3] 11, 11-5=6
// 



