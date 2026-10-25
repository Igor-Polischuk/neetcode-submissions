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
     * @return {number}
     */
    sumNumbers(root) {
        const dfs = (node, n) => {
            if (!node) {
                return 0;
            }

            const val = node.val + n;

            const left = dfs(node.left, val * 10);
            const right = dfs(node.right, val * 10);

            return left + right || val;
        };

        return dfs(root, 0);
    }
}
