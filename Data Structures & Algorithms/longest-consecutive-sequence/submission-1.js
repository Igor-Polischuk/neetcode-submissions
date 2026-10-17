class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) {
            return 0
        }
        const set = new Set(nums)

        let res = 1;

        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i]-1)) {
                continue
            }

            let start = nums[i]
            let len = 1;

            while (set.has(start+1)) {
                start += 1;
                len++
            }

            res = Math.max(len, res)
        }

        return res;
    }
}
