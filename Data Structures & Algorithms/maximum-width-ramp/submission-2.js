class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxWidthRamp(nums) {
        const n = nums.length
        const maxToRight = Array(n).fill(0)
        maxToRight[n-1] = nums[n-1]

        for (let i = n - 2; i >= 0; i--) {
            maxToRight[i] = Math.max(nums[i], maxToRight[i+1])
        }

        let l = 0;
        let res = 0
        for (let r = 0; r < n; r++) {
            while (maxToRight[r] < nums[l] && l < r) {
                l++
            }

            res = Math.max(res, r - l)
        }

        return res
    }
}

// [4,1,2,3]
// [4, 3, 3, 3]
// l = 0, r = 0


// [4,1,10,2,0,3,2,6]
// [10, 10, 10, 6, 6, 6, 6]
// 


// [11, 12, 3, 4, 10, 9, 1]
// [12, 12, 10, 10, 10, 9, 1]
// 