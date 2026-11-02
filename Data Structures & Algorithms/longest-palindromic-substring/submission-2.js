class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = s[0];

        for (let i = 0; i < s.length; i++) {
            let left = i;
            let right = i;

            while (s[left] === s[right] && left >= 0 && right < s.length) {
                if (res.length < right - left + 1) {
                    res = s.slice(left, right + 1);
                }
                left--;
                right++;
            }

            left = i;
            right = i + 1;

            while (s[left] === s[right] && left >= 0 && right < s.length) {
                if (res.length < right - left + 1) {
                    res = s.slice(left, right + 1);
                }
                left--;
                right++;
            }
        }

        return res;
    }
}
