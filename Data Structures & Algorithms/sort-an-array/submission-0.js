class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length === 0) {
            return [];
        }

        return mergeSort(nums, 0, nums.length - 1);
    }
}

function mergeSort(arr, low, high) {
    if (low === high) {
        return [arr[low]];
    }

    const mid = Math.floor((low + high) / 2);

    const left = mergeSort(arr, low, mid);
    const right = mergeSort(arr, mid + 1, high);

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let l = 0;
    let r = 0;

    while (l !== left.length || r !== right.length) {
        if (l === left.length) {
            result.push(right[r]);
            r++;
        } else if (r === right.length) {
            result.push(left[l]);
            l++;
        } else if (left[l] < right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }

    return result;
}
