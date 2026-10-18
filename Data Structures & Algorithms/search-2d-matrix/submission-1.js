class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length
        const cols = matrix[0].length

        const idxToCell = (idx) => {
            const row = Math.floor(idx / cols)
            const col = idx % cols

            return [row, col]
        }

        let r = rows * cols - 1
        let l = 0;
        while (l <= r) {
            const mid = Math.floor((l+r) / 2)

            const [row, col] = idxToCell(mid)
            const val = matrix[row][col]

            if (val === target) {
                return true
            }

            if (val < target) {
                l = mid+1
            } else {
                r = mid-1
            }
        }

        return false
    }
}

// 5
// l 0 r 11 m 5 -> v 11
// l 0 r 5 m 2 -> v4
// l2 r5 m3 -> v8
// l2 r3 m2 -> v4
