class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length;
        const lm = nums[0]
        const rm = nums[n-1]

        if (lm < rm) {
            return nums[0]
        }

        let min = Infinity

        let l = 0;
        let r = n - 1

        while (l <= r) {
            const mid = Math.floor((l+r)/2)

            if (nums[mid] < min) {
                min = nums[mid]
            }

            if (nums[mid] <= rm) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return min

    }
}

//[2,3,4,5,1]
// l 0 r 4 m 2 -> v 4 -> min 4 -> l = 3
// l3 r 4 m 3 -> v 5
