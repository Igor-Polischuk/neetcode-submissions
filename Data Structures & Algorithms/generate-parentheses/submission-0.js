class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        const backtrack = (availableOpen, availableClose, path) => {
            if (!availableOpen && !availableClose) {
                res.push(path);
                return;
            }

            let tmp = path;
            if (availableOpen && availableClose) {
                path = path + "(";
                backtrack(availableOpen - 1, availableClose, path);
            }
            path = tmp;
            const spentOpen = n - availableOpen;
            const spentClose = n - availableClose;

            if (availableClose && spentClose < spentOpen) {
                path = path + ")";
                backtrack(availableOpen, availableClose - 1, path);
            }
        };

        backtrack(n - 1, n, "(");

        return res;
    }
}
