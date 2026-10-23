class Solution {
    /**
     * @param {number[][]} firstList
     * @param {number[][]} secondList
     * @return {number[][]}
     */
    intervalIntersection(firstList, secondList) {
        if (firstList.length === 0 || secondList.length === 0) {
            return [];
        }

        const result = [];
        let i = 0;
        let j = 0;

        while (i < firstList.length && j < secondList.length) {
            const [startA, endA] = firstList[i]
            const [startB, endB] = secondList[j]

            const start = Math.max(startA, startB)
            const end = Math.min(endA, endB)

            if (start <= end) {
                result.push([start, end])
            }

            if (endA < endB) {
                i++
            } else {
                j++
            }
        }

        return result;
    }
}
