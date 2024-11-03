/*
                                                            Converted Sorted Array to Binary Search
                                                          ------------------------------------------

    Given an integer array nums where the elements are sorted in ascending order, convert it to a
height-balanced
binary search tree.

Example 1:

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in a strictly increasing order.


*/

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const sortedArrayToBST = function(nums) {
    
    // Helper function to build BST recursively
    function buildBST(left, right) {
        if (left > right) return null; // Base case: no elements in this range
        
        const mid = Math.floor((left + right) / 2); // Middle element
        const node = new TreeNode(nums[mid]); // Create root node with middle element
        
        // Recursively build left and right subtrees
        node.left = buildBST(left, mid - 1);
        node.right = buildBST(mid + 1, right);
        
        return node;
    }
    
    return buildBST(0, nums.length - 1); // Start with the full array range
};

// Example Usage
const nums1 = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums1));

const nums2 = [1, 3];
console.log(sortedArrayToBST(nums2));
