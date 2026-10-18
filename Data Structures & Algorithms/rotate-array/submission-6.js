class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length;
        k %= n
        nums.reverse()
        this.reverse(nums, 0, k-1)
        this.reverse(nums, k, n-1)
    }

    reverse(arr, start, end) {
        while (start < end) {
            const temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }
}

