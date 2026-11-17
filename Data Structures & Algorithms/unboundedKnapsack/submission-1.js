class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const map = new Map()
        
        const dfs = (idx, remaining) => {
            const key = `${idx}:${remaining}`
            if (map.has(key)) {
                return map.get(key)
            }

            if (idx === profit.length || remaining <= 0) {
                return 0
            }
            const skip = dfs(idx+1, remaining)
            let take = 0

            if (weight[idx] <= remaining) {
                take = profit[idx] + dfs(idx, remaining - weight[idx])
            }

            const res = Math.max(skip, take)
            map.set(key, res)
            return res
        }

        return dfs(0, capacity)
    }
}

// take/no take