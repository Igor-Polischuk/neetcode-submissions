class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length <= 3) {
            return Math.max(...nums);
        }

        const withFirst = this.optimalConsequtiveRob(nums, 0, nums.length - 1);
        const withLast = this.optimalConsequtiveRob(nums, 1, nums.length);

        return Math.max(withFirst, withLast);
    }

    optimalConsequtiveRob(nums, from, to) {
        let rob1 = 0;
        let rob2 = 0;

        for (let i = from; i < to; i++) {
            let temp = rob2;
            rob2 = Math.max(rob2, rob1 + nums[i]);
            rob1 = temp;
        }

        return rob2;
    }
}

// 3 4 3-> 3 4 3
//[2,9,8,3,6] -> 9 8 3 6 -> 9 9 12 15 | 2 9 8 3 -> 2 9 10 12
