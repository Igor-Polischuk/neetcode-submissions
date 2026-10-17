class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const counter = new Map();
        counter.set(0, 0);
        counter.set(1, 0);
        counter.set(2, 0);

        for (let i = 0; i < nums.length; i++) {
            counter.set(nums[i], counter.get(nums[i]) + 1);
        }

        let curr = 0;
        let i = 0;
        while (i < nums.length) {
            if (counter.get(curr) > 0) {
                counter.set(curr, counter.get(curr) - 1);
            } else {
                curr++;
                continue;
            }

            nums[i] = curr;
            i++;
        }
    }
}
