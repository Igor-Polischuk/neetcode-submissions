class MinHeap {
    constructor() {
        this.heap = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const h = this.heap;
        let idx = h.push(val) - 1;

        while (idx > 0) {
            const p = Math.floor((idx - 1) / 2);
            if (h[p] < h[idx]) {
                break;
            }
            [h[p], h[idx]] = [h[idx], h[p]];
            idx = p;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        const h = this.heap;

        if (h.length === 0) {
            return -1;
        }

        if (h.length === 1) {
            return h.pop();
        }

        const root = h[0];
        h[0] = h.pop();
        let idx = 0;

        while (true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let smallest = idx;

            if (left < h.length && h[left] < h[smallest]) {
                smallest = left;
            }

            if (right < h.length && h[right] < h[smallest]) {
                smallest = right;
            }

            if (smallest === idx) {
                break
            }

            [h[smallest], h[idx]] = [h[idx], h[smallest]]
            idx = smallest
        }

        return root;
    }

    /**
     * @return {number}
     */
    top() {
        return this.heap[0] ?? -1
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = []

        for (const n of nums) {
            this.push(n)
        }
    }
}
