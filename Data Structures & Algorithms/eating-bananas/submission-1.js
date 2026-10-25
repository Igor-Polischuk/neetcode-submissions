class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let r = Math.max(...piles)
        let l = 1

        const canEat = (k) => {
            let spent = 0;

            for (const pile of piles) {
                spent += Math.ceil(pile / k)
            }

            return spent <= h
        }

        while (l < r) {
            const mid = Math.floor((l + r) / 2)

            if (canEat(mid)) {
                r = mid
            } else {
                l = mid + 1
            }
        }

        return r

    }

}
