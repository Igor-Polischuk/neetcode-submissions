class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];

            if (fast === slow) {
                break;
            }
        }

        let slow2 = 0;

        while (true) {
            slow = nums[slow];
            slow2 = nums[slow2];

            if (slow2 === slow) {
                return slow;
            }
        }
    }
}

// 1,4,3,4,2
// 1 1 -> 4 2 -> 2 4 -> 3 3 = 4
//1,2,3,2,2
// 1 1 -> 2 3 -> 3 3 -> 2
//[1,2,3,4,4]
// 1 1 -> 2 3 -> 3 4 -> 4 4 ->
// 1 ... n
//[1,3,4,2,2]
// 1 1 -> 3 2 -> 2 2
