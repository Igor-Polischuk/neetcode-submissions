class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let res = 0;

        while (left < right) {
            const leftBar = heights[left]
            const rightBar = heights[right]
            const area = (right - left) * Math.min(leftBar, rightBar)
            res = Math.max(res, area)

            if (leftBar < rightBar) {
                left++
            } else {
                right--
            }
        }

        return res
    }
}

// l = 0; r = 7 | 1 6 -> area -> 5 
// l = 1; r = 7 | 7 6 -> area -> 36
