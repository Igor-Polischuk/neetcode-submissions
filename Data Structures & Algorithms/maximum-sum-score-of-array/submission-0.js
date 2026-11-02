class Solution {
    maximumSumScore(nums) {
        const n = nums.length;
        const prefix = Array(n).fill(0);
        const suffix = Array(n).fill(0);

        suffix[0] = nums[0];

        for (let i = 1; i < n; i++) {
            suffix[i] = suffix[i - 1] + nums[i];
        }

        prefix[n - 1] = nums[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            prefix[i] = prefix[i + 1] + nums[i];
        }

        let res = -Infinity

        for (let i = 0; i < n; i++) {
            res = Math.max(res, suffix[i], prefix[i])
        }

        return res
    }
}

// 5 -9 6

// 5 -4 2
// 3 -3 6
