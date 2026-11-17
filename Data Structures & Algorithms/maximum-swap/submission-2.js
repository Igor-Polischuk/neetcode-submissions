class Solution {
    /**
     * @param {number} num
     * @return {number}
     */
    maximumSwap(num) {
        const digits = num.toString().split('').map(Number)
        const n = digits.length;
        const largestSuffix = Array(n).fill(0)
        largestSuffix[n-1] = n-1

        for (let i = n - 2; i >= 0; i--) {
            const next = largestSuffix[i+1]
            largestSuffix[i] = digits[i] > digits[next] ? i : next
        }

        for (let i = 0; i < n; i++) {
            const idx = largestSuffix[i]
            if (digits[i] < digits[idx]) {
                [digits[i], digits[idx]] = [digits[idx], digits[i]]
                break
            }
        }

        return Number(digits.join(""))
    }
}
// [1, 9, 9, 3]
// [2, 2, 2, 3]