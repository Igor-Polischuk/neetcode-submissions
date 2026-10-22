class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let left = 0;
        let right = 0;

        for (const n of nums) {
            left = Math.max(n, left)
            right += n
        }

        const canSplit = (largest) => {
            let subarray = 1,
                curSum = 0;
            for (const num of nums) {
                curSum += num;
                if (curSum > largest) {
                    subarray++;
                    if (subarray > k) return false;
                    curSum = num;
                }
            }
            return true;
        };

        let res = right
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);

            if (canSplit(mid)) {
                res = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }


        return res

    }
}

// 2 6 16 17 22


//[1,0,2,3,5] | k=4
// 1 1 3 6 11