class Solution {
    /**
     * @param {number[][]} bombs
     * @return {number}
     */
    maximumDetonation(bombs) {
        const graph = {};

        for (let i = 0; i < bombs.length; i++) {
            const bomb = bombs[i];
            const key = `${bomb[0]}:${bomb[1]}:${bomb[2]}:${i}`;
            graph[key] = []
            for (let j = 0; j < bombs.length; j++) {
                if (j === i) {
                    continue;
                }

                const curr = bombs[j];
                if (
                    Math.pow(bomb[0] - curr[0], 2) + Math.pow(bomb[1] - curr[1], 2) <=
                    Math.pow(bomb[2], 2)
                ) {
                    graph[key].push(`${curr[0]}:${curr[1]}:${curr[2]}:${j}`)
                }
            }
        }

        let res = 0
        const visited = new Set()

        const dfs = (bomb) => {
            if (visited.has(bomb)) {
                return 0
            }

            visited.add(bomb)

            let affected = 0;

            for (const next of graph[bomb]) {
                affected += dfs(next)
            }

            return 1 + affected
        }

        for (const bomb of Object.keys(graph)) {
            visited.clear()
            res = Math.max(res, dfs(bomb))
        }



        return res
    }
}
