class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res = 0;

        for (const n of nums) {
            res = res ^ n
        }

        return res
    }
}
