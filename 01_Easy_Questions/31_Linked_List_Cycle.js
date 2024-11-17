/*
                                                Linked List Cycle
                                               -------------------

Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a 
parameter. Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Constraints:

    The number of the nodes in the list is in the range [0, 104].
    -105 <= Node.val <= 105
    pos is -1 or a valid index in the linked-list.

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Helper function to create a linked list with a cycle
function createLinkedListWithCycle(values, pos) {
    if (values.length === 0) return null;

    const head = new ListNode(values[0]);
    let current = head;
    let cycleNode = null;

    // Create the linked list and store the node where the cycle should start
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;

        // If we are at the position where the cycle should start, store that node
        if (i === pos) {
            cycleNode = current;
        }
    }

    // If pos is valid, create the cycle by linking the last node to the cycle start node
    if (pos >= 0) {
        current.next = cycleNode;
    }

    return head;
}

// The hasCycle function to detect a cycle in a linked list
function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;  // Both pointers start at head

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true; // Cycle detected
    }

    return false; // No cycle found
}

// Test cases
const list1 = createLinkedListWithCycle([3, 2, 0, -4], 1);  // Cycle at index 1
console.log("Expected output: true, Actual output:", hasCycle(list1));

const list2 = createLinkedListWithCycle([1, 2], 0);  // Cycle at index 0
console.log("Expected output: true, Actual output:", hasCycle(list2));

const list3 = createLinkedListWithCycle([1], -1);  // No cycle
console.log("Expected output: false, Actual output:", hasCycle(list3));
