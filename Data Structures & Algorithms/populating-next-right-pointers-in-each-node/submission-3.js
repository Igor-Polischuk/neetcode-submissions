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
        if (!root) return null;
        let curr = root
        let next = root.left

        while (curr && next) {
            curr.left.next = curr.right

            if (curr.next) {
                // next.next.left.next = next.next.right
                // next.left.next = next.right
                // next.right.next = next.next.left
                curr.right.next = curr.next.left
            }

            curr = curr.next

            if (!curr) {
                curr = next
                next = curr.left
            }

        }

        return root
    }
}

// curr 4, next null

