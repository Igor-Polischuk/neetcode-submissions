const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
const LEFT = 0
const DOWN = 1
const RIGHT = 2
const UP = 3

class Solution {
    /**
     * @param {number} n
     * @return {number[][]}
     */
    generateMatrix(n) {
        const matrix = Array.from({length: n}, () => Array(n).fill(-1))

        let row = 0
        let col = 0
        let curr = 1;

        let currDir = LEFT;

        while (curr <= n * n) {
            matrix[row][col] = curr

            let nr = row + directions[currDir][0]
            let nc = col + directions[currDir][1]

            if (nr >= n || nr < 0 || nc < 0 || nc >= n || matrix[nr][nc] !== -1) {
               currDir = currDir + 1 > UP ? LEFT : currDir + 1;
               nr = row + directions[currDir][0]
               nc = col + directions[currDir][1]
            }

            row = nr
            col = nc

            curr++
        }

        return matrix
    }
}
