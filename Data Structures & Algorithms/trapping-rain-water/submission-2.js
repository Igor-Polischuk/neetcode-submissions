class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        let maxLeft = height[0]
        let maxRight = height[n-1]

        let left = 0
        let right = n - 1

        let res = 0
        while (left < right) {
            if (height[left] < height[right]) {
                left++
                res += Math.max(Math.min(maxLeft, maxRight) - height[left], 0)
                maxLeft = Math.max(height[left], maxLeft)
            } else {
                right--
                res += Math.max(Math.min(maxLeft, maxRight) - height[right], 0)
                maxRight = Math.max(height[right], maxRight)
            }

        }

        return res
    }
}
// min(l, r) - h
