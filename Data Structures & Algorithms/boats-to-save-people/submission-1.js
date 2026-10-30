class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        const count = Array(limit).fill(0)

        for (const weight of people) {
            count[weight]++
        }

        let idx = 0
        let weight = 1
        while (idx < people.length) {
            if (count[weight] === 0) {
                weight++
                continue
            }
            people[idx] = weight
            idx++
            count[weight]--
        }


        let res = 0

        let l = 0
        let r = people.length - 1

        while (l <= r) {
            const weight = people[l] + people[r]
            if (weight <= limit) {
                l++
                r--
            } else {
                r--
            }
            res++
        }

        return res 
    }
}

// 1 2 4 5