/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root) {
        const res = []

        const stack = [root]
        const processed = [false]

        while (stack.length) {
            const node = stack.pop()
            const isProcessed = processed.pop()

            if (!node) {
                continue
            }

            if (isProcessed) {
                res.push(node.val)
            } else {
                stack.push(node, node.right, node.left)
                processed.push(true, false, false)
            }
        }

        return res
    }
}
