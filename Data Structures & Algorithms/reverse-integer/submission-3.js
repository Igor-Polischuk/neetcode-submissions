const MIN = -(2 ** 31); // -2147483648
const MAX = 2 ** 31 - 1;

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

        if (isNegative) {
            res *= -1;
        }

        return res >= -(2 ** 31) && res <= 2 ** 31 - 1 ? res : 0;
    }
}
