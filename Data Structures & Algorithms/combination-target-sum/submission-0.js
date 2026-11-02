class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        const backtrack = (idx, path, currSum = 0) => {
            if (currSum > target) {
                return;
            }

            if (currSum === target) {
                res.push([...path]);
                return;
            }


            path.push(nums[idx]);
            backtrack(idx, path, currSum + nums[idx]);
            path.pop();

            for (let i = idx+1; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(i, path, currSum + nums[i]);
                path.pop();
            }
        };

        backtrack(0, []);

        return res;
    }
}
