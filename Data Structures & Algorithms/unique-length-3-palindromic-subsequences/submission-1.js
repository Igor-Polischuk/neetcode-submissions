class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countPalindromicSubsequence(s) {
        if (s.length < 3) {
            return 0;
        }

        const bucket = Array.from({ length: 26 }, () => [Infinity, -Infinity]);

        for (let i = 0; i < s.length; i++) {
            const chIdx = s.charCodeAt(i) - "a".charCodeAt(0);

            bucket[chIdx][0] = Math.min(bucket[chIdx][0], i);
            bucket[chIdx][1] = Math.max(bucket[chIdx][1], i);
        }

        let res = 0;

        for (const [first, last] of bucket) {
            if (last - first < 2) continue;

            const chars = new Set();

            for (let i = first + 1; i < last; i++) {
                chars.add(s[i]);
            }

            res += chars.size;
        }

        return res;
    }
}
// b. b. c. b. a. b. a
// 1, 1, 2, 2, 3, 3, 3

// ckafnafqo
// 1 2 3 4 5 5 5 6 7 -> 5 - 2 + 5 - 4 = 3 + 1
// afa
// ana
// fna
// faf
