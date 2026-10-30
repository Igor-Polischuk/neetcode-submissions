class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0]

        let profit = 0

        for (let i = 0; i < prices.length; i++) {
            const price = prices[i]
            buy = Math.min(price, buy)
            profit = Math.max(price - buy, profit)
        }

        return profit
    }
}
