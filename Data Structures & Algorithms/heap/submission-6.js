class MinHeap {
    constructor() {
        this.h = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const h = this.h
        let idx = h.push(val) - 1

        while (idx > 0) {
            const p = Math.floor((idx-1)/2)
            if (h[p] < h[idx]) {
                break
            }
            [h[idx], h[p]] = [h[p], h[idx]]
            idx = p
        }
    }

    /**
     * @return {number}
     */
    pop() {
        const h = this.h

        if (h.length === 0) {
            return -1
        }

        if (h.length === 1) {
            return h.pop()
        }

        const root = h[0]
        h[0] = h.pop()

        let i = 0

        while (true) {
            const l = i * 2 + 1
            const r = i * 2 + 2
            let smallest = i

            if (l < h.length && h[l] < h[smallest]) {
                smallest = l
            }

            if (r < h.length && h[r] < h[smallest]) {
                smallest = r
            }

            if (smallest === i) {
                break
            }

            [h[smallest], h[i]] = [h[i], h[smallest]]
            i = smallest
        }

        return root
    }

    /**
     * @return {number}
     */
    top() {
        return this.h[0] ?? -1
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.h = []

        for (const n of nums) {
            this.push(n)
        }
    }
}
