class Solution {
    /**
     * @param {number} poured
     * @param {number} query_row
     * @param {number} query_glass
     * @return {number}
     */
    champagneTower(poured, query_row, query_glass) {
        let top = Array(query_row+1).fill(0)
        let bottom = Array(query_row+1).fill(0)
        top[0] = poured;
        let row = 0;
        while (row < query_row) {
            for (let glass = 0; glass <= row; glass++) {
                const overflow = (Math.max(top[glass] - 1, 0)) / 2 
                bottom[glass] += overflow
                bottom[glass+1] += overflow
            }

            row++
            top = bottom
            bottom = Array(query_row+1).fill(0)
        }

        return Math.min(top[query_glass], 1)

    }
}
