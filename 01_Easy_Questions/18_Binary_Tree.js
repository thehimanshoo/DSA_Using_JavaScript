/*
    Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
Explanation:

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]

Explanation:

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]

Constraints:

    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100

*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (node) {
            traverse(node.left);   // Visit left subtree
            result.push(node.val);  // Visit node itself
            traverse(node.right);  // Visit right subtree
        }
    }

    traverse(root);
    return result;
}

// Example usage:
// Constructing the binary tree for input: root = [1, null, 2, 3]
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root)); // Output: [1, 3, 2]
