class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let sum = 0;
        const map = new Map();
        map.set(0, 1);
        let res = 0;

        for (const n of nums) {
            sum += n;

            const diff = sum - k;

            res += map.get(diff) || 0;
            map.set(sum, (map.get(sum) || 0) + 1);
        }

        return res;
    }
}
