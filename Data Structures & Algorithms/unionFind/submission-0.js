class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i)
        this.size = Array(n).fill(1)
        this.count = n
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        while (x !== this.parent[x]) {
            this.parent[x] = this.parent[this.parent[x]]
            x = this.parent[x]
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

        if (this.size[x] < this.size[y]) {
            [x, y] = [y, x]
        }

        this.parent[y] = x
        this.size[x] += this.size[y]
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
