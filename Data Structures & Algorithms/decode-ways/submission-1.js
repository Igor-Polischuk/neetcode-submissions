class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dp = Array(s.length + 1).fill(0);
        dp[s.length] = 1;
        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === "0") {
                dp[i] = 0;
            } else {
                dp[i] = dp[i + 1];

                if (
                    (i < s.length - 1 && s[i] === "1") ||
                    (s[i] === "2" && "0123456".includes(s[i + 1]))
                ) {
                    dp[i] += dp[i + 2];
                }
            }
        }

        return dp[0];
    }
}

// 12
// dp = [2 1 1]

//226
//dp = [3 2 1 1]
