/*
                                            Binary Tree Preorder Traversal
                                           --------------------------------

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]

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

function arrayToTree(arr) {
    if (!arr.length) return null;

    const root = { val: arr[0], left: null, right: null };
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (arr[i] !== null) {
            current.left = { val: arr[i], left: null, right: null };
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = { val: arr[i], left: null, right: null };
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

function preorderTraversal(rootArray) {
    const root = arrayToTree(rootArray);

    const result = [];
    function traverse(node) {
        if (!node) return;
        result.push(node.val); // Visit the root
        traverse(node.left);   // Traverse left subtree
        traverse(node.right);  // Traverse right subtree
    }
    traverse(root);
    console.log(result); // Print the result
}

// Test cases
preorderTraversal([1, null, 2, 3]);        // Output: [1, 2, 3]
preorderTraversal([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]); // Output: [1, 2, 4, 5, 6, 7, 3, 8, 9]
preorderTraversal([]);                     // Output: []
preorderTraversal([1]);                    // Output: [1]
