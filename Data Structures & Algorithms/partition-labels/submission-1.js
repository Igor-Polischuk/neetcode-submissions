class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const charIntervals = Array.from({ length: 26 }, () => [Infinity, -Infinity]);

        for (let i = 0; i < S.length; i++) {
            const ch = S[i];
            const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
            charIntervals[idx][0] = Math.min(charIntervals[idx][0], i);
            charIntervals[idx][1] = Math.max(charIntervals[idx][1], i);
        }

        const intervals = charIntervals
            .filter((interval) => isFinite(interval[0]))
            .sort((a, b) => a[0] - b[0]);

        const merged = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];

            if (curr[0] <= merged[merged.length - 1][1]) {
                merged[merged.length - 1][1] = Math.max(curr[1], merged[merged.length - 1][1])
            } else {
               merged.push(curr) 
            }
        }

        return merged.map(([l, r]) => r - l + 1);
    }
}
//ababcbaca
//defegdeh
//ijhklij
// each letter in one substr, so can't have same letter in two or more substrs
// x : 0, 3
// y: 1, 4
// z: 5, 7
// b: 6, 9
// i: 10, 10
// s: 11 11
// l: 12 12
