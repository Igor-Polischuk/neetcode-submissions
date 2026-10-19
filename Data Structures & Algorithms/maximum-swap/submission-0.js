class Solution {
    /**
     * @param {number} num
     * @return {number}
     */
    maximumSwap(num) {
        const nArr = num.toString().split("").map(Number);
        const maxToRight = Array(nArr.length);
        maxToRight[nArr.length - 1] = nArr.length - 1;

        for (let i = nArr.length - 2; i >= 0; i--) {
            maxToRight[i] = nArr[i] > nArr[maxToRight[i + 1]] ? i : maxToRight[i + 1];
        }

        for (let i = 0; i < nArr.length; i++) {
            const n = nArr[i];
            if (n < nArr[maxToRight[i]]) {
                [nArr[i], nArr[maxToRight[i]]] = [nArr[maxToRight[i]], nArr[i]];
                return Number(nArr.join(''));
            }
        }

        return num
    }
}
