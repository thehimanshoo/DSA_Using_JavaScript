/*
                                            Median of Two Sorted Arrays
                                           -----------------------------

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
    nums1.length == m
    nums2.length == n
    
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106

*/

function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const minX = (partitionX === m) ? Infinity : nums1[partitionX];

        const maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        const minY = (partitionY === n) ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // partitioning the arrays
            if ((m + n) % 2 === 0) {
                return ((Math.max(maxX, maxY) + Math.min(minX, minY)) / 2).toFixed(5);
            } else {
                return Math.max(maxX, maxY).toFixed(5);
            }
        } else if (maxX > minY) {
            // Moving towards left in nums1
            high = partitionX - 1;
        } else {
            // Moving towards right in nums1
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted or other error occurred.");
}

console.log(findMedianSortedArrays([1, 3], [2])); // Output: "2.00000"
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: "2.50000"