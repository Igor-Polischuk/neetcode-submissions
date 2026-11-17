class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n = nums.length - 1;

        if (n === 0) {
            return true;
        }

        if (nums[0] === 0) {
            return false;
        }

        let reachable = 0;

        for (let i = 0; i <= n; i++) {
            const curr = nums[i];

            reachable = Math.max(reachable, i + curr);
            if (reachable === i && i !== n) {
                return false;
            }
        }

        return true;
    }
}

// 1
//
