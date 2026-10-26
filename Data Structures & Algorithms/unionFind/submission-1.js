class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.items = Array.from({length: n}, (_, i) => i)
        this.size = Array(n).fill(1)
        this.count = n
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        while (x !== this.items[x]) {
            this.items[x] = this.items[[this.items[x]]]
            x = this.items[x]
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

        this.items[x] = y
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
