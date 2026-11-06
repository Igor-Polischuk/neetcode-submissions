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
        // const dfs = (node, next) => {
        //     if (!node) {
        //         return null
        //     }

        //     const left = dfs(node.left)
        //     const right = dfs(node.right)

        //     if (left) {
        //         left.next = right
        //     }

        //     return node
        // }

        const dfs = (left, right) => {
            if (!left && !right) {
                return
            }
            
            if (left) {
                left.next = right
            }

            dfs(left?.left, left?.right)
            dfs(left?.right, right?.left)
            dfs(right?.left, right?.right)
        }
        dfs(root?.left, root?.right)

        return root
    }
}
