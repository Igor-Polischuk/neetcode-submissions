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

        function getAllPairsLowerOrEqual(target) {
            let l = 0;
            let r = nums.length

            let count = 0
            while (l < r) {
                const sum = nums[l] + nums[r]

                if (sum <= target) {
                    count += r - l
                    l++
                } else {
                    r--
                }
            }

            return count
        }



        return getAllPairsLowerOrEqual(upper) - getAllPairsLowerOrEqual(lower-1);
    }
}
