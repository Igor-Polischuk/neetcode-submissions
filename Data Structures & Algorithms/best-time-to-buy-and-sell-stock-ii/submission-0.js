class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let hold = prices[0]

        for (let i = 1; i < prices.length; i++) {
            const curr = prices[i]

            if (curr < hold) {
                hold = curr
            } else {
                profit += curr - hold
                hold = curr
            }
        }

        return profit
    }
}
