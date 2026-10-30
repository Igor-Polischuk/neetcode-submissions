class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const n = nums.length;

        const map = new Map();

        for (const num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else if (map.size < 2) {
                map.set(num, 1);
            } else {
                const lessFrequentKey = Array.from(map.entries()).sort((a, b) => a[1] - b[1])[0][0];

                if (map.get(lessFrequentKey) === 1) {
                    map.delete(lessFrequentKey);
                    map.set(num, 1);
                } else {
                    map.set(lessFrequentKey, map.get(lessFrequentKey) - 1);
                }
            }
        }
        const limit = n / 3;
        const res = [];

        const cands = Array.from(map.keys());
        let count1 = 0;
        let count2 = 0;

        for (const num of nums) {
            if (num === cands[0]) {
                count1++;
            }
            if (num === cands[1]) {
                count2++;
            }
        }

        if (count1 > limit) {
            res.push(cands[0]);
        }
        if (count2 > limit) {
            res.push(cands[1]);
        }

        return res;
    }
}
//[5,2,3,2,2,2,2,5,5,5,3,1,1,1,1,1,1,1]
//counters = [[5, 4], [2, 5], [1, 4]]
