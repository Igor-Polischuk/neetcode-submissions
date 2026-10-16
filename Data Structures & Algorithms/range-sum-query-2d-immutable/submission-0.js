class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        this.presum = Array.from({ length: rows }, () => Array(cols).fill(0));

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const above = r > 0 ? this.presum[r-1][c] : 0
                const left = c > 0 ? this.presum[r][c-1] : 0
                const corner = r > 0 && c > 0 ? this.presum[r-1][c-1] : 0;
                this.presum[r][c] = matrix[r][c] + above + left - corner
            }
        }

        console.log(this.presum )
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        if (row1 === 0 && col1 === 0) {
            return this.presum[row2][col2]
        }

        const a = row1 > 0 ? this.presum[row1 - 1][col2] : 0
        const b = col1 > 0 ? this.presum[row2][col1-1] : 0
        const c = col1 > 0 && row1 > 0 ? this.presum[row1-1][col1-1] : 0
        const res = this.presum[row2][col2] - a - b + c

        return res
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// 3 6
// 8 17
