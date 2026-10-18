class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxWidthRamp(nums) {
        const n = nums.length;
        const maxToRight = Array(n + 1).fill(-Infinity);

        for (let i = n - 1; i >= 0; i--) {
            maxToRight[i] = Math.max(maxToRight[i + 1], nums[i]);
        }

        let l = 0;
        let res = 0;
        for (let r = 0; r < n; r++) {
            while (nums[l] > maxToRight[r] && l < r) {
                l++;
            }

            res = Math.max(res, r - l );
        }

        return res;
    }
}

//[4,5,0,3,3,2]
// i < j
// n[i] < n[j]
1;
5;
