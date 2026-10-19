/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let curr = new ListNode()
        let dummy = curr
        while (l1 || l2 || carry) {
            const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            
            carry = Math.floor(sum / 10)
            const val = sum > 9 ? sum % 10 : sum
            const res = new ListNode(val)
            curr.next = res
            curr = res
            l1 = l1?.next
            l2 = l2?.next
        }

        return dummy.next
    }
}
