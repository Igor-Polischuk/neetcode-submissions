class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        const h = this.heap;
        h.push(val);
        let idx = h.length - 1;

        while (idx > 0) {
            const p = Math.floor((idx - 1) / 2);
            if (h[p][0] < h[idx][0]) return;
            [h[idx], h[p]] = [h[p], h[idx]];
            idx = p;
        }
    }

    size() {
        return this.heap.length
    }

    pop() {
        const h = this.heap;
        if (!h.length) {
            return -1;
        }

        if (h.length === 1) {
            return h.pop();
        }

        const res = h[0];
        h[0] = h.pop();

        let idx = 0;
        while (true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let smallest = idx;

            if (left < h.length && h[left][0] < h[smallest][0]) {
                smallest = left;
            }

            if (right < h.length && h[right][0] < h[smallest][0]) {
                smallest = right;
            }

            if (smallest === idx) {
                break;
            }

            [h[idx], h[smallest]] = [h[smallest], h[idx]];
            idx = smallest;
        }

        return res;
    }

    top() {
        return this.heap[0] ?? -1;
    }
}


class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        const graph = {}; // TODO: as an array

        for (const [a, b] of edges) {
            if (a in graph) {
                graph[a].push(b);
            } else {
                graph[a] = [b];
            }

            if (b in graph) {
                graph[b].push(a);
            } else {
                graph[b] = [a];
            }
        }

        const visited = new Set()
        const dfs = (node) => {
            if (!(node in graph) || visited.has(node)) {
                return 0
            }
            visited.add(node)
            let depth = 0;
            for (const child of graph[node]) {
                depth = Math.max(depth, dfs(child))
            }

            return depth + 1
        }

        const heap = new MinHeap()
        for (let i = 0; i < n; i++) {
            visited.clear()
            const depth = dfs(i)
            heap.push([depth, i])
        }
       
        const heapTop = heap.pop()
        const result = [heapTop[1]]
        let prev = heapTop[0]

        while (heap.size()) {
            const [depth, root] = heap.pop()
            if (depth !== prev) {
                break
            }
            result.push(root)

        }

        return result
    }
}

// N nodes from 0 to n-1
// Edges array where edges[i] denotes indirect relation between two nodes
// Return trees with lowest height
//NOTE: All trees are the same
// PLAN brute force
// Build graph node: connections[]
// Iterate from 0 to n and do dfs on each tree
// O(n^2)
