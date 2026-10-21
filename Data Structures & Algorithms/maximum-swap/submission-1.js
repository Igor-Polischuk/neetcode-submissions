class Solution {
    /**
     * @param {number} num
     * @return {number}
     */
    maximumSwap(num) {
        const arr = num.toString().split('').map(Number)
        const n = arr.length
        const rightMost = Array(n).fill(0)
        rightMost[n-1] = n-1

        for (let i = n - 2; i >= 0; i--) {
            rightMost[i] = arr[i] <= arr[rightMost[i+1]] ? rightMost[i+1] : i
        }

        for (let i = 0; i < n; i++) {
            if (arr[i] < arr[rightMost[i]]) {
                const tmp = arr[i]
                arr[i] = arr[rightMost[i]]
                arr[rightMost[i]] = tmp
                break
            }
        }

        return Number(arr.join(''))
    }
}
