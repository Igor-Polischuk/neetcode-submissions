class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const swap = (r1, c1, r2, c2) => {
            const tmp = matrix[r1][c1];
            matrix[r1][c1] = matrix[r2][c2];
            matrix[r2][c2] = tmp;
        };

        let left = 0;
        let right = matrix[0].length - 1;
        let top = 0;
        let bottom = matrix.length - 1;

        while (left < right) {
            const row = top;

            for (let col = left; col < right; col++) {
                const offset = col - left
                swap(row, col, top + offset, right);
                swap(row, col, bottom, right - offset);
                swap(row, col, bottom - offset, left);
            }

            left++;
            right--;
            top++;
            bottom--;
        }
    }
}
//row = 0, col = 0 -> 2
//swap(0, 0, 0, 3)
// row = 1, col = 1 -> 1
// swap(1, 1, 2, 2)
// 0 0 -> 0 2, 2 2, 2 0
// 0 1 -> 1 2, 2 1, 1 1

// offset = 0
// (0, 0) -> (0 + offset, col + n - 1 ); (0 + n - 1, 0 + n - 1 - offset); (0 + n - 1 - offset, 0)
// offset = 1
// (0, 1) -> (0 + offset, col + n - 1 ); (0 + n - 1, 0 + n - 1 - offset); (0 + n - 1 - offset, 1)

//(0, 0) -> (0, 2); (2, 2); (2, 0)
//(0, 1) -> (1, 2); (2, 1); (1, 0)

// offset = 0, n = 2 (inner matrix)
//(1, 1) -> (1, 2); (2, 2); (2, 1)
