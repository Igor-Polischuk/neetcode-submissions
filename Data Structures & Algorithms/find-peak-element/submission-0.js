class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let l = 0
        let r = nums.length - 1

        while (l < r) {
            const m = Math.floor((l+r)/2)

            const next = m >= nums.length - 1 ? -Infinity : nums[m+1]

            if (nums[m] <= next) {
                l = m + 1
            } else {
                r = m 
            }
        }

        return l
    }
}
