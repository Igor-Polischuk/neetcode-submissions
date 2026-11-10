class Solution {
    /**
     * @param {string} boxes
     * @return {number[]}
     */
    minOperations(boxes) {
        const res = Array(boxes.length).fill(0);

        let balls = 0;
        let moves = 0;

        for (let i = 0; i < boxes.length; i++) {
            moves = balls + moves;
            res[i] = moves;

            if (boxes[i] === "1") {
                balls++;
            }
        }

        balls = 0;
        moves = 0;

        for (let i = boxes.length - 1; i >= 0 ; i--) {
            moves = balls + moves;
            res[i] += moves;

            if (boxes[i] === "1") {
                balls++;
            }
        }

        return res;
    }
}

// 110 [0, 1, 2] [0, 1, 3] [1 0 0]
// total 1 = 2,  ->
