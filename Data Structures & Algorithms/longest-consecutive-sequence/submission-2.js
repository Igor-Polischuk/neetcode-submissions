class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length <= 1) {
            return nums.length
        }

        const set = new Set(nums)
        let res = 0

        for (const n of set) {
            if (set.has(n-1)) {
                continue
            }

            let count = 1;
            let curr = n
            while (set.has(curr + 1)) {
                count++
                curr++
            }

            res = Math.max(res, count)
        }

        return res
    }
}
