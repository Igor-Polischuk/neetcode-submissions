class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const graph = Array.from({ length: n }, () => []);
        const indegree = Array(n).fill(0);

        for (const [from, to] of edges) {
            graph[from].push(to);
            indegree[to]++;
        }

        const queue = [];
        let head = 0;

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i)
            }
        }

        const res = []

        while (head < queue.length) {
            const node = queue[head++]
            res.push(node)

            for (const next of graph[node]) {
                indegree[next]--

                if (indegree[next] === 0) {
                    queue.push(next)
                }
            }
        }

        return res.length === n ? res : []
    }
}
