class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        // const prefix = Array(nums.length)
        // prefix[0] = nums[0]

        // for (let i = 1; i < nums.length; i++) {
        //     prefix[i] = nums[i] + prefix[i-1]
        //     if (prefix[i] % k === 0) {
        //         return true
        //     }
        // }
        let prefix = 0;
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            prefix += nums[i];

            const reminder = prefix % k;

            if (reminder in map && i - map[reminder] >= 2) {
                return true;
            }

            if (i >= 1 && reminder === 0) {
                return true
            }

            if (!(reminder in map)) {
                map[reminder] = i;
            }
        }

        return false;
    }
}

// 23, 25, 29, 35, 42
//5, 1, 5, 5, 0
