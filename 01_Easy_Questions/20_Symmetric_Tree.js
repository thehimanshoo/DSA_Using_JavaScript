/*
                                                                Symmetric Tree
                                                              -----------------

    Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:

Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:

    The number of nodes in the tree is in the range [1, 1000].
    -100 <= Node.val <= 100

*/

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * Main function to check if a binary tree is symmetric
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
    if (!root) return true; // An empty tree is symmetric
    return checkSymmetric(root.left, root.right);
};

/**
 * Helper function to check if two trees are mirror images
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {boolean}
 */
const checkSymmetric = (left, right) => {
    if (!left && !right) return true;  // Both nodes are null
    if (!left || !right) return false; // One of the nodes is null
    if (left.val !== right.val) return false; // Values do not match

    // Check if left subtree's left matches right subtree's right, and vice versa
    return checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left);
};

// Example Usage
const root1 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(3), new TreeNode(4)), 
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
console.log(isSymmetric(root1)); // Output: true

const root2 = new TreeNode(1, 
    new TreeNode(2, null, new TreeNode(3)), 
    new TreeNode(2, null, new TreeNode(3))
);
console.log(isSymmetric(root2)); // Output: false
