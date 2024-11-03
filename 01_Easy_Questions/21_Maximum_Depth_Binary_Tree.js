/*
                                                            Maximum Depth of Binary Tree
                                                          -------------------------------

    Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100


*/

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const maxDepth = function(root) {
    if (root === null) return 0; // Base case: If the node is null, depth is 0
    // Recursive case: 1 + max depth of left and right subtrees
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// Example Usage
const root1 = new TreeNode(3, 
    new TreeNode(9), 
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(root1)); // Output: 3

const root2 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth(root2)); // Output: 2