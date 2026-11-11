class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s) {
        if (s.length > 12) {
            return []
        }

        const res = []
        const backtrack = (idx, dotSpent, path) => {
            if (dotSpent === 4 && idx === s.length) {
                res.push(path.slice(0, -1))
                return
            }

            if (dotSpent > 4) {
                return
            }

            for (let i = idx; i < Math.min(idx + 3, s.length); i++) {
                if (idx !== i && s[idx] === '0') {
                    continue
                }
                const num = Number(s.slice(idx, i+1))

                if (num > 255) {
                    continue
                }


                backtrack(i+1, dotSpent + 1, path + num + ".")
            }

            
        }

        backtrack(0, 0, "")

        return res
    }
}

//s = "101023"
// 1 10 101

// 1 231 231 231 2