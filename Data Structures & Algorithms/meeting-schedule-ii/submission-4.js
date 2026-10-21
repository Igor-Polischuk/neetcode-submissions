/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

const START = 1;
const END = -1;

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const events = [];

        for (const interval of intervals) {
            events.push([interval.start, START]);
            events.push([interval.end, END]);
        }

        events.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }

            return a[0] - b[0];
        });

        let count = 0;
        let res = 0;
        for (const [_, event] of events) {
            count += event;
            res = Math.max(res, count);
        }

        return res;
    }
}
