class Solution {
    /**
     * @param {number[]} nums
     * @param {number} x
     * @return {number}
     */
    minOperations(nums, x) {
        const sum = nums.reduce((sum, curr) => curr + sum, 0)
        const target = sum - x

        if (target < 0) {
            return -1
        }

        if (target === 0) {
            return nums.length
        }

        let l = 0
        let subSum = 0

        for (let r = 0; r < nums.length; r++) {
            subSum += nums[r]

            while (subSum > target) {
                subSum -= nums[l++]
            }

            if (subSum === target) {
                return nums.length - (r - l + 1)
            }
        }

        return -1
    }
}

//sum is 11 target is 6, x is 5
// l = 0 r = 0 s = 2 r = 1
// l = 1 r = 2 s = 6 r = 2

