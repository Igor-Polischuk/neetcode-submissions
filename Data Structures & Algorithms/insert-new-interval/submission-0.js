class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];

        let i = 0;
        while (intervals[i]?.[1] < newInterval[0] && i < intervals.length) {
            result.push(intervals[i]);
            i++;
        }

        while (newInterval[1] >= intervals[i]?.[0] && i < intervals.length) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }

        result.push(newInterval);

        while (i < intervals.length) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
