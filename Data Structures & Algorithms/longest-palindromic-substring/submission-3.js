class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const n = s.length

        const dp = Array.from({length: n}, () => Array(n).fill(false))

        let res = s[0]

        for (let i = n; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i+1][j-1])) {
                    dp[i][j] = true

                    if (j - i + 1 > res.length) {
                        res = s.slice(i, j+1)
                    }
                }
            }
        }

        return res
    }
}
