class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) {
            return 0
        }
        
        let left = 0;
        let result = 1;
        const counter = {}

        for (let right = 0; right < s.length; right++) {
            const char = s[right]

            if (char in counter) {
                counter[char]++
            } else {
                counter[char] = 1
            }

            while (counter[char] > 1) {
                const charToRemove = s[left++]
                counter[charToRemove] -= 1
            }

            result = Math.max(result, right - left + 1)
        }

        return result;
    }
}
