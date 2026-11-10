class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {string}
     */
    getHappyString(n, k) {
        const totals = 3 * Math.pow(2, n - 1);

        if (k > totals) {
            return "";
        }

        let [letter, from, to] = this.getFirstLetter(totals, k);
        let res = letter;
        for (let i = 1; i < n; i++) {
            const [l, f, t] = this.getNextLetter(from, to, k - 1, res[res.length - 1]);
            res += l;
            from = f;
            to = t;
        }

        return res;
    }

    getNextLetter(left, right, k, prev) {
        const letters = ["a", "b", "c"].filter(l => l !== prev);
        const leftEnds = left + ((right - left + 1) / 2) - 1
        if (k <= leftEnds) {
            const letter = letters[0];
            return [letter, left, leftEnds];
        } else {
            const letter = letters[1];
            return [letter, leftEnds + 1, right];
        }
    }

    getFirstLetter(totals, k) {
        const partitionSize = totals / 3;

        if (k <= partitionSize) {
            return ["a", 0, partitionSize - 1];
        } else if (k > partitionSize * 2) {
            return ["c", partitionSize * 2, totals - 1];
        } else {
            return ["b", partitionSize, partitionSize * 2 - 1];
        }
    }
}
// 2 + 3 -> 5 / 2 -> 2
//0 1 | 2 3 | 4 5

// a b c ab ac bc ba bc ca cb abc aba acb aca bac bca bab bcb cab cac cba cbc  ...

//abc aba acb aca bac bca bab bcb | cab cac cba cbc | -> 8 9 10 11, 2/2
//n = 3, k = 10 (but 9 idx)
// Initial:  8 11 c
// mid = 9, mid <= 9 (true)
// return a, from 8 to 9
// mid = 8, 


//ab ac | ba bc | ca cb -> 2, 3
// n = 2, k = 4
// mid = 

// n = 4
// abab , abca

// n = 2, k = 4
// total = 6 combinatios
// k = 4, 1st letter is b
// Next letter a or c
// b interval from 3 to 4
// k in second part then it should be c
