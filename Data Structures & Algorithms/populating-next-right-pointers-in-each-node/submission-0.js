/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        const queue = [root]
        let head = 0

        while (head < queue.length) {
            const len = queue.length - head
            let prev = null

            for (let i = 0; i < len; i++) {
                const node = queue[head++]

                if (!node) {
                    continue
                }

                if (prev) {
                    prev.next = node
                }

                prev = node

                queue.push(node.left)
                queue.push(node.right)
            }
        }

        return root
    }
}
