class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    findMinArrowShots(points) {
        points.sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0]
            }

            return a[1] - b[1]
        })

        let count = 1

        for (let i = 0; i < points.length - 1; i++) {
            if (points[i][1] >= points[i+1][0]) {
                points[i+1][0] = Math.max(points[i+1][0], points[i][0])
                points[i+1][1] = Math.min(points[i+1][1], points[i][1])
            } else {
                count++
            }
        }

        return count
    }
}
