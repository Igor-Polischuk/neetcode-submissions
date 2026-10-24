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
    inorderTraversal(root) {
        const res = []

        const stack = []
        let curr = root

        while (stack.length || curr) {
            while (curr) {
                stack.push(curr)
                curr = curr.left
            }

            const node = stack.pop()

            if (!node) {
                continue
            }

            res.push(node.val)
            curr = node.right
        }

        return res
    }
}
