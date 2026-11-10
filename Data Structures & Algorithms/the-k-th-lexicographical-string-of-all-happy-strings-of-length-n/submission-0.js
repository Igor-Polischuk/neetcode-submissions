class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {string}
     */
    getHappyString(n, k) {
        const totals = 3 * Math.pow(2, n - 1)

        if (k > totals) {
            return ""
        }
        let strs = []
        const letters = 'abc'

        const backtrack = (path, skip) => {
            if (path.length === n) {
                strs.push(path)
                return
            }


            for (const ch of letters) {
                if (skip === ch) {
                    continue
                }
                backtrack(path + ch, ch)
            }


        }

        backtrack("")

        return strs[k-1]
    }
}

// a b c ab ac bc ba bc ca cb abc aba acb aca bac bca bab bcb cab cac cba cbc  ...

// n = 4
// abab , abca