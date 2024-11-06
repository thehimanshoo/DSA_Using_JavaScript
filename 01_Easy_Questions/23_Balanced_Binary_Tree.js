/*
                                                    Balanced Binary Tree
                                                 -------------------------

    Given a binary tree, determine if it is
height-balanced


Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:

    The number of nodes in the tree is in the range [0, 5000].
    -104 <= Node.val <= 104

*/

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const isBalanced = function(root) {
    function checkHeight(node) {
        // Base case: height of null is 0
        if (node === null) return 0; 

        // Left subtree is not balanced
        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1; 
        
        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1; // Right subtree is not balanced

        // If difference in heights is more than 1, return -1 to indicate imbalance
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        // Return height of current node
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return checkHeight(root) !== -1; // Tree is balanced if height is not -1
};

// Example Usage
const root1 = new TreeNode(3, 
    new TreeNode(9), 
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(isBalanced(root1)); // Output: true

const root2 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), 
    new TreeNode(2)
);
console.log(isBalanced(root2)); // Output: false

const root3 = null;
console.log(isBalanced(root3)); // Output: true
