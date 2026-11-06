class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    integerBreak(n) {
        const memo = new Map()

        const dfs = (num) => {
            if (num === 1) {
                return 1;
            }

            if (memo.has(num)) {
                return memo.get(num)
            }

            let res = num === n ? 0 : num;
            for (let i = 1; i <= Math.floor(num / 2); i++) {
                let left = num - i; // dfs(2) * dfs(2)
                res = Math.max(res, dfs(i) * dfs(left));
            }
            memo.set(num, res)
            return res;
        };

        return dfs(n);
    }
}

// 2 -> 4
//

// 1 -> 0
// 2 -> 1 | 1 + 1 | 1 * 1
// 3 -> 2 | 2 + 1 | 2 * 1
// 4 -> 4 | 2 + 2 | 2 * 2
// 5 -> 6 | 2 + 3 | 2 * 3
// 6 -> 9 | 3 + 3 | 3 * 3 
// 7 -> 12| 3 + 2 + 2 | 3 * 2 * 2

// 1..3 -> 6 - 1 => 5 * dp[1] = 5
// 1..3 -> 6 - 2 => 2 * dp[4] = 8
// 1..3 -> 6 - 3 => 3 * dp[3] = 6

// 10 -> 3 3 4
