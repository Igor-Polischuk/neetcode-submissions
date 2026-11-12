class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const rows = grid.length
        const cols = grid[0].length

        const dp = Array.from({length: rows}, () => Array(cols).fill(0))
        dp[0][0] = grid[0][0]

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (r === 0 && c === 0) {
                    continue
                }

                if (r === 0) {
                    dp[r][c] = grid[r][c] + dp[r][c-1]
                } else if (c === 0) {
                    dp[r][c] = grid[r][c] + dp[r-1][c]
                } else {
                    dp[r][c] = grid[r][c] + Math.min(dp[r-1][c], dp[r][c-1])
                }
            }
        }

        return dp[rows-1][cols-1]        
    }
}

//  1 2 0
//  1 9 2
//  1 9 0

// 1 3 3
// 2 11 5
// 3 12 5

// [1,2,0],
// [5,4,2], ->
// [1,1,3]
// 1 3 3
// 6 6 5
// 7 7 8
