class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        const dp = Array.from({ length: s.length }, () => Array(s.length).fill(false));

        for (let i = s.length - 1; i >= 0; i--) {
            for (let j = s.length - 1; j >= i; j--) {
                if (j === i) {
                    res += 1;
                    dp[i][j] = true;
                }

                if (
                    s[j] === s[i] &&
                    (j - i === 1 || (i < s.length - 2 && j > 0 && dp[i + 1][j - 1]))
                ) {
                    res += 1;
                    dp[i][j] = true;
                }
            }
        }

        return res;
    }
}

// aaa

// dp[from][to]
// is polindrome if from === to and from + 1 and to - 1 is polindromes as well
// let i = 0, ?

//a a a
// i = 2, j = 2, dp[2][2] = true
// i = 1, j = 2 dp[2][1] (dp)

// a b c
// i = 2 j = 2 dp[2][2] = true
// i = 1 j = 2 (bc) skip
// i = 1 j = 1 dp[1][1] = true
// i = 0 j = 2 (abc),
