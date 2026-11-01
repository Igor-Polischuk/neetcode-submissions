class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        if (grid[0][0] === 1) {
            return 0;
        }

        const rows = grid.length;
        const cols = grid[0].length;

        const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
        dp[0][0] = 1;

        for (let i = 1; i < cols; i++) {
            if (grid[0][i] === 1) {
                dp[0][i] = 0;
            } else {
                dp[0][i] = dp[0][i - 1];
            }
        }

        for (let i = 1; i < rows; i++) {
            if (grid[i][0] === 1) {
                dp[i][0] = 0;
            } else {
                dp[i][0] = dp[i-1][0];
            }
        }
        for (let r = 1; r < rows; r++) {
            for (let c = 1; c < cols; c++) {
                if (grid[r][c] === 1) {
                    dp[r][c] = 0
                } else {
                    dp[r][c] = dp[r-1][c] + dp[r][c-1]
                }
            }
        }

        return dp[rows-1][cols-1]

        // const queue = [[0, 0]]
        // let head = 0

        // let res = 0;

        // while (head < queue.length) {
        //     const len = queue.length - head

        //     for (let i = 0; i < len; i++) {
        //         const [r,c] = queue[head++]

        //         if (r === rows - 1 && c === cols - 1) {
        //             res++
        //             continue
        //         }

        //         const nr = r+1
        //         const nc = c+1

        //         if (nr < rows && grid[nr][c] !== 1) {
        //             queue.push([nr, c])
        //         }

        //         if (nc < cols && grid[r][nc] !== 1) {
        //             queue.push([r, nc])
        //         }
        //     }
        // }

        // return res
    }
}
