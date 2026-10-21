/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const starts = [];
        const ends = [];

        for (const interval of intervals) {
            starts.push(interval.start);
            ends.push(interval.end);
        }

        starts.sort(sortNums);
        ends.sort(sortNums);

        let res = 0;
        let count = 0;
        let sPtr = 0;
        let ePtr = 0;

        while (sPtr < starts.length) {
            if (starts[sPtr] < ends[ePtr]) {
                sPtr++;
                count++;
            } else {
                ePtr++;
                count--;
            }

            res = Math.max(count, res);
        }

        return res;
    }
}

function sortNums(a, b) {
    return a - b;
}

// [1, 3], [2, 3], [2,4], [5, 6]
//
//[(0,40),(5,10),(15,20)]
// 0, 5, 15
//10, 20 40

// 1 1 2 5 10 15
//5 6 10 15 20 20
