class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                stack.push(i);
            }
            if (s[i] === ")") {
                if (stack.length && s[stack[stack.length - 1] ]=== "(") {
                    stack.pop();
                } else {
                    stack.push(i);
                }
            }
        }

        let res = ""

        for (let i = s.length - 1; i >= 0; i--) {
            if (i === stack[stack.length - 1]) {
                stack.pop()
                continue
            }

            res = s[i] + res
        }


        return res
    }
}
