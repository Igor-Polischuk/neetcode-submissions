class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {
        // 97 - 122
        // 97 98 99
        // 120 121 122

        const map = {}

        for (const str of strings) {
            const group = this.getGroup(str)

            if (group in map) {
                map[group].push(str)
            } else {
                map[group] = [str]
            }
        }

        return Object.values(map)
    }

    getGroup(str) {
        if (str.length === 1) {
            return "67"
        }

        let group = ""
        for (let i = 1; i < str.length; i++) {
            group += (str.charCodeAt(i-1) - str.charCodeAt(i) + 26 )% 26
        }

        return group
    }
}
