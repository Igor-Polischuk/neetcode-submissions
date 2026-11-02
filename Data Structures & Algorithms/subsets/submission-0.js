class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []

        const backtrack = (idx, path) => {
            res.push([...path])

            for (let i = idx; i < nums.length; i++) {
                path.push(nums[i])
                backtrack(i+1, path)
                path.pop()
            }

        }

        backtrack(0, [])

        return res
    }
}
