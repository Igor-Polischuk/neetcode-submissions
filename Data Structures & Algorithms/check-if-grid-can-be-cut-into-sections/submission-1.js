class Solution {
    checkValidCuts(n, rectangles) {
        const xIntervals = Array(rectangles.length);
        const yIntervals = Array(rectangles.length);

        for (let i = 0; i < rectangles.length; i++) {
            const [x1, y1, x2, y2] = rectangles[i];
            xIntervals[i] = [x1, x2];
            yIntervals[i] = [y1, y2];
        }

        xIntervals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
        yIntervals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

        let xSplits = 0;
        let ySplits = 0;

        let prevX = xIntervals[0][1];
        let prevY = yIntervals[0][1];
        for (let i = 1; i < rectangles.length; i++) {
            if (xIntervals[i][0] < prevX) {
                prevX = Math.max(prevX, xIntervals[i][1]);
            } else {
                prevX = xIntervals[i][1];
                xSplits++;
            }

            if (yIntervals[i][0] < prevY) {
                prevY = Math.max(prevY, yIntervals[i][1]);
            } else {
                prevY = yIntervals[i][1];
                ySplits++;
            }
        }

        return xSplits >= 2 || ySplits >= 2
    }
}

// 0 1, 1 2, 2 3
// 0 3, 0 3, 0 3

// 0 1, 0 2, 1 3, 2 3
// 0 1, 0 1, 1 3, 1 3
