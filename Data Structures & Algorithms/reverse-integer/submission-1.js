class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        if (x === 0) {
            return 0;
        }
        const isNegative = x < 0;

        if (isNegative) {
            x *= -1;
        }

        let res = 0;

        while (x) {
            const mod = x % 10;
            res *= 10;
            res += mod;
            x = Math.floor(x / 10);
        }

        res = res > Math.pow(2, 31) ? 0 : res;

        if (isNegative && res !== 0) {
            res *= -1;
        }

        return res

    }
}
