const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    maxMatrixSum(matrix) {
        const n = matrix.length;
        let sum = 0
        let negativeCount = 0
        let smallestAbs = Infinity

        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (matrix[row][col] < 0) {
                    negativeCount++
                }

                const val = Math.abs(matrix[row][col])
                sum += val
                smallestAbs = Math.min(smallestAbs, val)
            }
        }
        return negativeCount % 2 === 0 ? sum : sum - smallestAbs - smallestAbs
    }
}
