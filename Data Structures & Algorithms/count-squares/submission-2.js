class CountSquares {
    constructor() {
        this.pointsCount = {};
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const key = this.#pointToKey(point);

        if (this.pointsCount[key]) {
            this.pointsCount[key]++;
        } else {
            this.pointsCount[key] = 1;
        }
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let res = 0;

        for (const [pointKey, pointCount] of Object.entries(this.pointsCount)) {
            const p = this.#keyToPoint(pointKey);
            const isDiagonal =
                Math.abs(p[0] - point[0]) === Math.abs(p[1] - point[1]) && p[1] - point[1];

            if (!isDiagonal) {
                continue;
            }

            const pointA = this.#pointToKey([point[0], p[1]]);
            const pointB = this.#pointToKey([p[0], point[1]]);

            if (pointA in this.pointsCount && pointB in this.pointsCount) {
                const pointACount = this.pointsCount[pointA];
                const pointBCount = this.pointsCount[pointB];

                res += pointACount * pointBCount * pointCount;
            }
        }

        return res;
    }

    #keyToPoint(str) {
        return str.split(":").map(Number);
    }

    #pointToKey(point) {
        return point.join(":");
    }
}
