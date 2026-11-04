class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums2.length < nums1.length) {
            [nums1, nums2] = [nums2, nums1];
        }

        const n1 = nums1.length;
        const n2 = nums2.length;

        const total = n1 + n2;
        const partitionSize = Math.floor(total / 2);

        let left = -1;
        let right = n1;

        while (left <= right) {
            const i = Math.floor((left + right) / 2);
            const j = partitionSize - i - 2;

            const leftBorder1 = i >= 0 ? nums1[i] : -Infinity;
            const rightBorder1 = i + 1 < n1 ? nums1[i + 1] : Infinity;
            const leftBorder2 = j >= 0 ? nums2[j] : -Infinity;
            const rightBorder2 = j + 1 < n2 ? nums2[j + 1] : Infinity;

            if (leftBorder1 <= rightBorder2 && leftBorder2 <= rightBorder1) {
                return total % 2 === 1
                    ? Math.min(rightBorder1, rightBorder2)
                    : (Math.max(leftBorder1, leftBorder2) + Math.min(rightBorder2, rightBorder1)) /
                          2;
            } else if (rightBorder2 < leftBorder1) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }

        return -1;
    }
}

//Merged:  1 2 2 3 4 5 6 7 8 9 10 | total: 11 half: 5 median: 5
//nums1: 2 4 6 8 9
//nums2: 1 2 3 5 7 10
// 4-6 i 3-5
// L = 0; R = 4;
// MID=2 (6), AL = 6, AR = 8,
// j = 5 - 2 - 2=1 BL = 2 BR = 3
// Is right: 6 <= 3 && 2 <= 8 -> AL > BR r = mid - 1
// L = 0; R = 1
// MID=0 (2) -> AL=2 AR=4
//j = 5 - 0 - 2 = 3, BL = 5 б BR = 7

//nums1=[1,2]nums2=[3]
//mid = 0

// 1 2
// 3

// L = 0, R = 1
// MID = 0, AL = 3 AR=INFINITY
// J = -1 BL = -Inf, BR 1
