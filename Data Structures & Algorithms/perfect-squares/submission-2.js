class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        const sqrs = [];

        for (let i = 0; i <= n; i++) {
            const sqr = i * i;
            if (sqr <= n) {
                sqrs.push(sqr);
            } else {
                break;
            }
        }

        const dp = Array(n + 1).fill(Infinity);
        dp[0] = 1;

        for (let i = 0; i <= n; i++) {
            for (const sqr of sqrs) {
                if (sqr > i) {
                    break;
                }
                if (sqr === i) {
                    dp[i] = 1;
                    break;
                }

                dp[i] = Math.min(dp[i], dp[i-sqr] + 1)
            }
        }
        return dp[dp.length - 1];
    }
}
//1, 4, 9, 16, 25
//0 -> 1
// 1 -> 1
// 2 -> 2
// 3 -> 3
// 4 -> 1
// 5 -> 2
// 6 -> 3
// 7 -> 4
// 8 -> 2
// 9 -> 1
// 10 -> 2
// 11 -> 3
// 12 -> 3 -> 4 + 4 + 4
// 13 -> 2

// 13-9 -> 4
