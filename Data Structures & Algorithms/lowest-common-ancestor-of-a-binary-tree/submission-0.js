/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root) {
            return null
        }
        
        if (root === p || root === q) {
            return root
        }

        const left = this.lowestCommonAncestor(root.left, p, q)
        const right = this.lowestCommonAncestor(root.right, p, q)

        if (left && right) {
            return root
        }

        return left || right
    }
}
