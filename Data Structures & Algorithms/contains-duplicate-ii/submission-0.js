class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        if (k === 0) {
            return false;
        }

        const n = nums.length;

        let left = 0;
        const set = new Set()
        
        for (let right = 0; right < n; right++) {
            if (right - left > k) {
                set.delete(nums[left++])
            }

            if (set.has(nums[right])) {
                return true
            }

            set.add(nums[right])
        }

        return false
    }
}
