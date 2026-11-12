class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if (text1 === text2) {
            return text1.length;
        }

        const dp = Array.from({ length: text1.length+1 }, () => Array(text2.length+1).fill(0));
        for (let i = text1.length - 1; i >= 0; i--) {
            for (let j = text2.length - 1; j >= 0; j--) {
                if (text1[i] === text2[j]) {
                    dp[i][j] = 1 + dp[i+1][j+1]
                } else {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1])
                }
            }
        }
        console.log(dp)
        return dp[0][0];
    }
}

//  oxcpqrsvwf
// shmtulqrypy
// qr
// p -> len - 2;

//dp[from][to] -> dp[0][0] -> 0
// dp[0][1] -> 0
