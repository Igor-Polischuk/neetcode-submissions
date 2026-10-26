class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLengthOfShortestSubarray(arr) {
        const n = arr.length;
        let prefixEnds = -1;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                prefixEnds = i;
                break
            }
        }

        if (prefixEnds === -1) {
            return 0;
        }

        let suffixStarts = -1;

        for (let i = n-1; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                suffixStarts = i;
                break
            }
        }

        let l = 0
        let r = suffixStarts
        let result = Math.min(
            n - prefixEnds - 1,
            suffixStarts
        );
        while (l <= prefixEnds && r < n) {
            if (arr[l] <= arr[r]) {
                result = Math.min(result, r - l - 1);
                l++
            } else {
                r++
            }
        }

        return result
    }
}

// 5 6 4 1 2 3

