class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let l = 0

        let result = 1

        const map = new Map()

        for (let r = 0; r < fruits.length; r++) {
            const fruit = fruits[r]

            map.set(fruit, (map.get(fruit) || 0) + 1)

            while (map.size > 2) {
                const fruitToRemove = fruits[l]
                map.set(fruitToRemove, map.get(fruitToRemove) - 1)

                if (map.get(fruitToRemove) <= 0) {
                    map.delete(fruitToRemove)
                }

                l++
            }

            result = Math.max(result, r - l + 1)
        }

        return result
    }
}

//fruits[i] - type of tree
// only two types of fruits
// start from any, should pick when move
// when new fruit stops

// Basicly - I need find the larges sequence that contais at most 2 different numbers

// 2 2 3 1 2 3 
// <-
// [1,2,3,2,2]
// {1: 1, 2: 1, 3: 1}
// [1,2,3,2,2,3,3,2,1,1,2,3,3,2,2,1,1,3]
