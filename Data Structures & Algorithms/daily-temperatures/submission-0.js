class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length
        const result = Array(n).fill(0)
        const stack = []

        for (let i = 0; i < n; i++) {
            while (stack.length && stack[stack.length-1][0] < temperatures[i]) {
                const [_, idx] = stack.pop()
                const days = i - idx
                result[idx] = days
            }

            stack.push([temperatures[i], i])
        }

        return result
    }
}
// 1, 4, 1, 2, 1, 0, 0
// [40, 5], [28, 5]