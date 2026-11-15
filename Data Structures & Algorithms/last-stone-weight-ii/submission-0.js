class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const totalSum = stones.reduce((sum, acc) => sum + acc, 0)
        const target = Math.floor(totalSum / 2)
        const cache = Array.from({length: stones.length}, () => Array(totalSum+1).fill(-1))

        const dfs = (idx, currSum) => {
            if (currSum >= target || idx === stones.length) {
                return Math.abs(currSum - (totalSum - currSum))
            }

            if (cache[idx][currSum] !== - 1) {
                return cache[idx][currSum]
            }

            const res =  Math.min(dfs(idx+1, currSum), dfs(idx+1, currSum + stones[idx]))
            cache[idx][currSum] = res

            return res
        }
        

        return dfs(0, 0)
    }
}

 //[2,4,1,5,6,3] -> [2, 1, 5, 6, 3] -> [1, 5, 6, 3] -> [4, 6, 3] -> [2, 3] -> 1

 // [1 2 3] -> [1, 3] -> [2] | [1, 1] -> 0

// [5, 10, 1] -> [5, 1] -> [4] -> sum 16, target 8
// 14, 4