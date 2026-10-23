class MaxHeap {
    constructor() {
        this.h = [];
    }

    push(item) {
        const h = this.h;
        let idx = h.push(item) - 1;
        while (idx > 0) {
            const p = Math.floor((idx - 1) / 2);
            if (h[p][1] > h[idx][1]) {
                return;
            }

            [h[p], h[idx]] = [h[idx], h[p]];
            idx = p;
        }
    }

    size() {
        return this.h.length;
    }

    peek() {
        return this.h[this.h.length - 1] ?? null;
    }

    pop() {
        const h = this.h;

        if (h.length === 0) {
            return null;
        }

        if (h.length === 1) {
            return h.pop();
        }

        const res = h[0];
        h[0] = h.pop();
        let i = 0;

        while (true) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let max = i;

            if (left < h.length && h[left][1] > h[max][1]) {
                max = left;
            }

            if (right < h.length && h[right][1] > h[max][1]) {
                max = right;
            }

            if (max === i) {
                break;
            }

            [h[max], h[i]] = [h[i], h[max]];
            i = max;
        }

        return res;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const count = {};

        for (const c of s) {
            if (c in count) {
                count[c]++;
            } else {
                count[c] = 1;
            }
        }

        const heap = new MaxHeap();

        for (const charFreqPair of Object.entries(count)) {
            heap.push(charFreqPair);
        }

        let res = "";
        while (heap.size()) {
            const candidate = heap.pop();

            if (res[res.length - 1] === candidate[0] && !heap.size()) {
                break
            }

            if (res[res.length - 1] === candidate[0] && heap.size()) {
                const candidate2 = heap.pop();
                res += candidate2[0];

                if (candidate2[1] > 1) {
                    candidate2[1]--;
                    heap.push(candidate2);
                }

                res += candidate[0];
                if (candidate[1] > 1) {
                    candidate[1]--;
                    heap.push(candidate);
                }
                continue;
            }

            res += candidate[0];
            if (candidate[1] > 1) {
                candidate[1]--;
                heap.push(candidate);
            }
        }

        return res.length === s.length ? res : "";
    }
}
