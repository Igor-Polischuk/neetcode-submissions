class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const memo = new Map()

        const dfs = (i, w) => {
            const key = `${i}:${w}`
            if (memo.has(key)) {
                return memo.get(key)
            }
            if (i === profit.length) {
                return 0;
            }

            const pick = weight[i] + w <= capacity ? profit[i] + dfs(i + 1, weight[i] + w) : 0;
            const noPick = dfs(i + 1, w);


            const maxProfit = Math.max(pick, noPick);
            memo.set(key, maxProfit)

            return maxProfit
        };

        return dfs(0, 0);
    }
}
// tw => 5, 7
//dp[i] => 4, 8
//dp = Math.max(dp[i-1] + p, )

// For each item we have two choises pick and skip
