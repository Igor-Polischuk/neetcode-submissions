// class MaxHeap {
//     constructor() {
//         this.h = [];
//     }

//     size() {
//         return this.h.length;
//     }

//     top() {
//         return this.h[0];
//     }

//     push(item) {
//         const h = this.heap
//         let idx = h.push(item)

//         while (idx > 0) {
//             const p = Math.floor((idx - 1) / 2)
//             if (h[p] > h[idx]) {
//                 break
//             }

//             [h[p], h[idx]] = [h[idx], h[p]]
//             idx =
//         }
//     }

//     pop() {}
// }

const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maximumMinimumPath(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const heap = new MaxPriorityQueue((entry) => entry[1]);
        heap.enqueue([[0, 0], grid[0][0]]);

        const scores = Array.from({ length: rows }, () => Array(cols).fill(-1));
        scores[0][0] = grid[0][0];

        while (heap.size()) {
            const [cell, score] = heap.dequeue();
            const [r, c] = cell;

            if (score !== scores[r][c]) {
                continue;
            }

            if (r === rows - 1 && c === cols - 1) {
                return score;
            }

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
                    continue;
                }

                const oldScore = scores[nr][nc];
                const newScore = Math.max(scores[nr][nc], Math.min(scores[r][c], grid[nr][nc]));

                if (newScore > oldScore) {
                    scores[nr][nc] = newScore;
                    heap.push([[nr, nc], newScore]);
                }
            }
        }

        return scores[rows - 1][cols - 1];
    }
}
