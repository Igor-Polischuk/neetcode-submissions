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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) {
            return true;
        }
        let res = true;
        const dfs = (node) => {
            if (!node) {
                return 0;
            }

            const left = dfs(node.left);
            const right = dfs(node.right);

            res = res ? Math.abs(left - right) <= 1 : res;

            return 1 + Math.max(left, right);
        };

        dfs(root)

        return res;
    }
}
