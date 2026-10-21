class Solution {
    /**
     * @param {number[]} nums
     * @param {number} lower
     * @param {number} upper
     * @return {number}
     */
    countFairPairs(nums, lower, upper) {
        if (nums.length <= 1) {
            return 0;
        }

        nums.sort((a, b) => a - b);

        function lowerBound(from, target) {
            let l = from
            let r = nums.length

            while (l < r) {
                const mid = Math.floor((l + r) / 2)

                if (nums[mid] < target) {
                    l = mid + 1
                } else {
                    r = mid 
                }
            }

            return l
        }

        let res = 0;

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const lowestTarget = lower - n;
            const upperTarget = upper - n;
            const lowIdx = lowerBound(i+1, lowestTarget)
            const upIdx = lowerBound(i+1, upperTarget + 1)

            res += (upIdx - lowIdx)
        }

        return res;
    }
}
