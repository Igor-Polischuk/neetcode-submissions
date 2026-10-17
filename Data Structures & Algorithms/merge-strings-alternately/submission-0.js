class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l = 0;
        let r = 0;
        let res = "";

        while (l !== word1.length || r !== word2.length) {
            if (l === word1.length) {
                res += word2[r];
                r++;
            } else if (r === word2.length) {
                res += word1[l];
                l++;
            } else if (l <= r) {
                res += word1[l];
                l++;
            } else {
                res += word2[r];
                r++;
            }
        }

        return res;
    }
}
