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
     * @return {number[][]}
     */
    verticalOrder(root) {
        if (!root) {
            return [];
        }
        const map = new Map();

        const queue = [[root, 0]];
        let head = 0;

        let leftMost = 0;
        let rightMost = 0;

        while (head < queue.length) {
            const [node, column] = queue[head++];

            leftMost = Math.min(column, leftMost);
            rightMost = Math.max(column, rightMost);
            if (map.has(column)) {
                map.get(column).push(node.val);
            } else {
                map.set(column, [node.val]);
            }

            if (node.left) {
                queue.push([node.left, column - 1]);
            }

            if (node.right) {
                queue.push([node.right, column + 1]);
            }
        }

        let res = [];

        for (let i = leftMost; i <= rightMost; i++) {
            res.push(map.get(i));
        }

        return res;
    }
}
