class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    sumSubarrayMins(arr) {
        const stack = [];
        const n = arr.length;
        let res = 0;
        const MOD = 1000000007;

        for (let i = 0; i < n; i++) {
            while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
                const idx = stack.pop();
                const left = stack.length ? stack[stack.length - 1] : -1;
                const impact = (i - idx) * (idx - left);
                res = (res + arr[idx] * impact) % MOD;
            }
            stack.push(i);
        }

        while (stack.length) {
            const idx = stack.pop();
            const left = stack.length ? stack[stack.length - 1] : -1;
            const impact = (n - idx) * (idx - left);
            res = (res + arr[idx] * impact) % MOD;
        }

        return res;
    }
}

//2,1,2
//1, 2 // idx=2 l=1 |

// 3, 5, 1, 4, 2
// res
// 0
//
