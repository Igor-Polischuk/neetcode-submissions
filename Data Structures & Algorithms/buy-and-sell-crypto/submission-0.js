class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold = prices[0]

        let res = 0

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < hold) {
                hold = prices[i]
            } else {
                res = Math.max(res, prices[i] - hold)
            }
        }

        return res
    }
}
