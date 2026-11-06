class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const graph = Array.from({ length: n + 1 }, () => Array());
        for (const [from, to, price] of flights) {
            graph[from].push([to, price]);
        }

        const dists = Array.from({ length: k + 3 }, () => Array(n).fill(Infinity));
        const heap = new MinPriorityQueue((entry) => entry[1]); // port, costs, stops used

        heap.push([src, 0, 0]);

        dists[0][src] = 0; // dists[stops][airport] = price

        while (heap.size()) {
            const [airport, costSoFar, stopsSoFar] = heap.pop();
            console.log(airport, costSoFar, stopsSoFar)

            if (airport === dst) {
                return costSoFar;
            }

            for (const [next, cost] of graph[airport]) {
                const totalCost = costSoFar + cost;
                const totalStops = stopsSoFar + 1

                if (totalCost < dists[totalStops][next]  && stopsSoFar <= k) {
                    heap.push([next, totalCost, totalStops]);
                    dists[totalStops][next] = totalCost;
                }
            }
        }

        return -1;
    }
}
