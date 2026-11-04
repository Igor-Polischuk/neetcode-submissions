class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0) {
                nums[i] = 0
            }
        }

        for (let i = 0; i < nums.length; i++) {
            const n = Math.abs(nums[i])
            if (n > 0 && n <= nums.length) {
                // nums[n-1] = nums[n-1] >= 0 ? -nums[n-1] : nums[n-1]
                if (nums[n-1] === 0) {
                    nums[n-1] = -n
                } else if (nums[n-1] > 0) {
                    nums[n-1] *= -1
                }
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= 0) {
                return i+1
            }
        }

        return nums.length+1
    }
}

//[1,2,4,5,6,3,1] -> len 7
//[-1,-2,4,-5,6,3,1] -> 1 and 7 
// [1;n+1]


// [-3,-2,0,1] -> [0, -1, 0, 1]
//All negative to zeros
// Num -> idx make negative
// search first non negaive
// [-3,-2,0,1] -> [0, 0, 0, 1] -> [-1, 0, 0, 1] -> 2
//[1,2,4,5,6,3,1] -> [-1,2,4,5,6,3,1] -> 7
//[1,2,4] -> [-1, -2, 4] -> 3
//[0,0,1,2] -> [0, 0, 1, 2]
