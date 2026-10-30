class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        const maxToLeft = Array(n).fill(0);
        const maxToRight = Array(n).fill(0);

        maxToLeft[0] = 0;
        for (let i = 1; i < n; i++) {
            maxToLeft[i] = Math.max(maxToLeft[i - 1], height[i - 1]);
        }

        maxToRight[n - 1] = 0;
        for (let i = n-2; i >= 0; i--) {
            maxToRight[i] = Math.max(maxToRight[i + 1], height[i + 1]);
        }

        let res = 0

        for (let i = 1; i < n; i++) {
            let h = height[i]

            const trapped = Math.min(maxToLeft[i], maxToRight[i]) - h

            if (trapped > 0) {
                res += trapped
            }
        }

        return res
    }
}
// min(l, r) - h
