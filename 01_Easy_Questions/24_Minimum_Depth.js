/*
                                                Minimum Depth of Binary Tree
                                              --------------------------------

    Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

Constraints:

    The number of nodes in the tree is in the range [0, 105].
    -1000 <= Node.val <= 1000

*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to build a binary tree from an array
function buildTree(arr) {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const currentNode = queue.shift();

        // Add left child
        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        // Add right child
        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root;
}

// function to find the minimum depth of the tree
function minDepth(root) {
    if (!root) return 0;

    const queue = [[root, 1]];

    while (queue.length > 0) {
        const [node, depth] = queue.shift();

        if (!node.left && !node.right) {
            return depth; // Return as soon as we reach a leaf node
        }

        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
}

// Example usage:
const root1 = buildTree([3, 9, 20, null, null, 15, 7]);
console.log(minDepth(root1)); // Output should be 2

const root2 = buildTree([2, null, 3, null, 4, null, 5, null, 6]);
console.log(minDepth(root2)); // Output should be 5