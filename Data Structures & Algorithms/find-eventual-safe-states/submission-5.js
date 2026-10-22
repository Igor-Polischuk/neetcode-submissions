class Solution {
    /**
     * @param {number[][]} graph
     * @return {number[]}
     */
    eventualSafeNodes(graph) {
        const n = graph.length;
        const invertedGraph = Array.from({length: n}, () => [])
        const indegree = Array(n).fill(0)

        for (let i = 0; i < n; i++) {
            const outs = graph[i]
            indegree[i] += outs.length;
            for (const n of outs) {
                invertedGraph[n].push(i)
            }
        }

        const queue = []
        let head = 0

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i)
            }
        }

        const result = []
        while (head < queue.length) {
            const node = queue[head++]
            result.push(node)

            for (const out of invertedGraph[node]) {
                indegree[out]--
                if (indegree[out] === 0) {
                    queue.push(out)
                }
            }
        }

        return result.sort((a,b) => a - b)
        
    }
}

// Terminal - no outgoing edges
// Safe if all outgoing edges ends up in terminal node
// Unsafe if can reach directed cycle