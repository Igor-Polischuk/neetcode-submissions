class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const memo = new Map()
        const backtrack = (i, sum) => {
            const key = `${i}:${sum}`
            if (memo.has(key)) {
                return memo.get(key)
            }
            if (sum === target && i === nums.length) {
                return 1;
            }

            if (i >= nums.length) {
                return 0;
            }

            let res = 0;

            const n = nums[i];

            res += backtrack(i + 1, sum + n);
            res += backtrack(i + 1, sum - n);
            memo.set(key, res)

            return res;
        };

        return backtrack(0, 0);
    }
}
//1 2 -> 2 4 -> 3 6
//1 -2 -> 2 0
//
// curr is - or +
