class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = []

        const backtrack = (idx, path) => {
            if (path.length === k) {
                res.push([...path])
                return
            }

            for (let i = idx; i <= n; i++) {
                path.push(i)
                backtrack(i+1, path)
                path.pop()
            }
        }

        backtrack(1, [])

        return res
    }
}

// subarrs len of K
// range is 0..n
