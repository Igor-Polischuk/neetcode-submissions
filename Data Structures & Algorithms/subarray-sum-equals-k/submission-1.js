class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefix = 0
        const map = new Map()
        map.set(0, 1)
        let res = 0

        for (const n of nums) {
            prefix += n

            const target = prefix - k

            if (map.has(target)) {
                res += map.get(target)
            }

            map.set(prefix, (map.get(prefix) || 0) + 1)
        }

        return res
    }
}