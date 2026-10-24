/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        if (pairs.length <= 1) {
            return [...pairs];
        }

        return this._mergeSort(pairs, 0, pairs.length - 1);
    }

    _mergeSort(arr, low, high) {
        if (low === high) {
            return [arr[low]];
        }
        const mid = Math.floor((low + high) / 2);
        const left = this._mergeSort(arr, low, mid);
        const right = this._mergeSort(arr, mid+1, high);

        return this._merge(left, right)
    }

    _merge(left, right) {
        let leftPtr = 0
        let rightPtr = 0
        const res = []

        while (leftPtr !== left.length || rightPtr !== right.length) {
            if (leftPtr === left.length) {
                res.push(right[rightPtr++])
            } else if (rightPtr === right.length) {
                res.push(left[leftPtr++])
            } else if (left[leftPtr].key <= right[rightPtr].key) {
                res.push(left[leftPtr++])
            } else {
                res.push(right[rightPtr++])
            }
        }

        return res
    }
}
