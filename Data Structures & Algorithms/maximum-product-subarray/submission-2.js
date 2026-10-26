class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxProduct = nums[0];
        let minProduct = nums[0];
        let res = Math.max(...nums)

        for (let i = 1; i < nums.length; i++) {
            const x = nums[i];

            const prevMax = maxProduct
            maxProduct = Math.max(Math.max(x*maxProduct, x*minProduct), x) // 8 // 8
            minProduct = Math.min(Math.min(prevMax*x, x*minProduct), x) // 4 // 
            res = Math.max(maxProduct, minProduct, res)
        }
        return res
    }
}
//2 4 -3 5
//max 2 8 -3 5
//min 2 4 -12 -...
// 2 8 -24 -120
// -120 -60 -15 5
// 4 2 2 0 9 5
// 4 8 16 0 0 0
// 0 0 0 0 45 5

// -5 2 3 0 -> 6
// -5 -10 -30 0
// 0 0 0 0
