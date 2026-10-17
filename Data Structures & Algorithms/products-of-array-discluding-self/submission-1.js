class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = Array(nums.length);

        let prefix = nums[0];
        res[0] = 1
        for (let i = 1; i < nums.length; i++) {
            res[i] = res[i-1] * prefix;
            prefix = nums[i];
        }

        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= suffix
            suffix *= nums[i]
        }

        return res
    }
}
