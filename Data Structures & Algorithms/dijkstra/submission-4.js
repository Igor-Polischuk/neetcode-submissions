/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const graph = Array.from({length: n}, () => [])

        for (const [from, to, w] of edges) {
            graph[from].push([to, w])
        }

        const heap = new PriorityQueue((a, b) => a[1] - b[1])
        heap.enqueue([src, 0])

        const dists = Array(n).fill(-1)
        dists[src] = 0

        while (!heap.isEmpty()) {
            const [node, totalWeight] = heap.dequeue()

            if (totalWeight > dists[node]) {
                continue
            }

            for (const [next, weight] of graph[node]) {
                const total = weight + totalWeight
                if (total < dists[next] || dists[next] === -1) {
                    dists[next] = total
                    heap.enqueue([next, total])
                }
            }
        }

        return dists
    }
}
