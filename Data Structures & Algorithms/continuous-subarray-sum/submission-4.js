class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let prefix = 0
        const map = {}

        for (let i = 0; i < nums.length; i++) {
            prefix += nums[i]
            const reminder = prefix % k

            if (reminder in map && i - map[reminder] >= 2) {
                return true
            }

            if (reminder === 0 && i >= 1) {
                return true
            }

            if (!(reminder in map)) {
                map[reminder] = i
            }
        }

        return false
    }
}
