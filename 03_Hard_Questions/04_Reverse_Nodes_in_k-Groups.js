/*
                                                Reverse Nodes in k-Groups
                                               ---------------------------

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. 
If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

Constraints:

    The number of nodes in the list is n.
    1 <= k <= n <= 5000
    0 <= Node.val <= 1000

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head, k) {
    if (!head || k === 1) return head;

    // Dummy node to simplify edge cases
    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    // Count the total number of nodes
    let totalNodes = 0;
    while (curr) {
        totalNodes++;
        curr = curr.next;
    }

    // Reset curr to head
    curr = head;

    // Reverse in groups of k
    while (totalNodes >= k) {
        let count = 0;
        let start = prev.next; // Start of the current group
        let end = curr; // End of the current group

        // Reverse the current group
        while (count < k) {
            const next = curr.next;
            curr.next = prev.next;
            prev.next = curr;
            curr = next;
            count++;
        }

        // Connect the reversed group to the previous part
        start.next = curr;
        prev = start;

        // Update the total number of nodes left
        totalNodes -= k;
    }

    return dummy.next;
}

// Helper function to create a linked list from an array
function createList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print the linked list
function printList(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// Example usage:
const head1 = createList([1, 2, 3, 4, 5]);
const k1 = 2;
const result1 = reverseKGroup(head1, k1);
printList(result1); // Output: [2, 1, 4, 3, 5]

const head2 = createList([1, 2, 3, 4, 5]);
const k2 = 3;
const result2 = reverseKGroup(head2, k2);
printList(result2); // Output: [3, 2, 1, 4, 5]