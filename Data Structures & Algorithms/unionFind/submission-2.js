class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.size = Array(n).fill(1)
        this.parents = Array.from({length: n}, (_, i) => i)
        this.count = n
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        const p = this.parents
        while (x !== p[x]) {
            p[x] = p[p[x]]
            x = p[x]
        }
        return x
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        return this.find(x) === this.find(y)
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        x = this.find(x)
        y = this.find(y)

        if (x === y) {
            return false
        }

        if (this.size[y] < this.size[x]) {
            [x, y] = [y, x]
        }

        this.parents[x] = y
        this.size[y] += this.size[x]
        this.count--

        return true
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.count
    }
}
