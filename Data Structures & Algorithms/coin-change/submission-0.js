class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        coins.sort((a, b) => a - b)

        const dp = Array(amount+1).fill(Infinity)
        dp[0] = 0

        for (let i = 1; i <= amount; i++) {
            for (const coin of coins) {
                const target = i - coin
                if (target < 0) {
                    continue
                }

                dp[i] = Math.min(dp[i], dp[target] + 1)
            }
        }

        return isFinite(dp[amount]) ? dp[amount] : -1
    }
}


// dp [0] -> 0
// dp[1] -> 1
// dp[2] -> 2
// dp[3] -> 3
// dp[4] -> 4
// dp[5] -> 1