class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        const graph = Array.from({ length: n }, () => []);

        if (edges.length === 0) {
            return [0]
        }

        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const indegree = Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            indegree[i] = graph[i].length;
        }

        const queue = [];
        let head = 0;

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 1) {
                queue.push(i);
            }
        }

        let resSize = 0;
        while (head < queue.length) {
            const len = queue.length - head;

            for (let i = 0; i < len; i++) {
                const node = queue[head++];

                for (const neighbour of graph[node]) {
                    indegree[neighbour]--;

                    if (indegree[neighbour] === 1) {
                        queue.push(neighbour);
                    }
                }
            }

            resSize = len

        }

        return queue.slice(head-resSize);
    }
}

// N nodes from 0 to n-1
// Edges array where edges[i] denotes indirect relation between two nodes
// Return trees with lowest height
//NOTE: All trees are the same, can try to reach center
