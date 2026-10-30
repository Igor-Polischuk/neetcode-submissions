class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    find132pattern(nums) {
        if (nums.length < 3) {
            return false
        }

        const stack = []
        let currMin = nums[0]

        for (let i = 1; i < nums.length; i++) {
            const n = nums[i]

            while (stack.length && n >= top(stack)[0] ) {
                stack.pop()
            }

            if (stack.length && n > top(stack)[1]) {
                return true
            }

            stack.push([n, currMin])

            currMin = Math.min(n, currMin)            
        }

        return false
    }
}

function top(stack, offset = 1) {
    return stack.length ? stack[stack.length-offset] : null
}

// nums=[8,15,11,-1,15]

// [15, 8], [11, 8]