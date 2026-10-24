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

        for (const [from, to, weight] of edges) {
            graph[from].push([to, weight])
        }

        const heap = new PriorityQueue((a, b) => a[1] - b[1])
        const dist = Array(n).fill(-1)

        heap.enqueue([src, 0])
        dist[src] = 0

        while (!heap.isEmpty()) {
            const [node, dis] = heap.dequeue()

            if (dist[node] < dis) {
                continue
            }

            for (const [next, weight] of graph[node]) {
                const distToNext = dis + weight
                if (dist[next] === -1 || distToNext < dist[next]) {
                    dist[next] = distToNext
                    heap.enqueue([next, distToNext])
                }
            }
        }

        return dist
    }
}
