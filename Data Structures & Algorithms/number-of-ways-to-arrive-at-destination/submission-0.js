class Solution {
    /**
     * @param {number} n
     * @param {number[][]} roads
     * @returns {number}
     */
    countPaths(n, roads) {
        const graph = Array.from({ length: n }, () => []);

        for (const [a, b, time] of roads) {
            graph[a].push([b, time]);
            graph[b].push([a, time]);
        }

        const from = 0;
        const to = n - 1;

        const dists = Array(n).fill(Infinity);
        const ways = Array(n).fill(Infinity);

        dists[from] = 0;
        ways[from] = 1;

        const pq = new MinPriorityQueue((item) => item[1]);
        pq.enqueue([0, 0]);

        while (!pq.isEmpty()) {
            const [node, distance] = pq.dequeue();
            if (distance > dists[node]) {
                continue;
            }

            for (const [next, dist] of graph[node]) {
                const newDist = dist + distance;
                if (newDist < dists[next]) {
                    dists[next] = newDist;
                    ways[next] = ways[node];

                    pq.enqueue([next, newDist]);
                } else if (newDist === dists[next]) {
                    ways[next] = (ways[node] + ways[next]) % 1000000007;
                }
            }
        }

        return ways[to];
    }
}
//1000000007
