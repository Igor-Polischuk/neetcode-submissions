/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null
        }
        const map = new Map()

        const copy = (node) => {
            if (map.has(node)) {
                return map.get(node)
            }

            const clone = new Node(node.val)
            map.set(node, clone)

            for (const n of node.neighbors) {
                clone.neighbors.push(copy(n))
            }

            return clone
        }

        return copy(node)
    }
}
