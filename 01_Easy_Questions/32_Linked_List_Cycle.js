/*
                                                             Linked List Cycle
                                                            -------------------
                                                            
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

 

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
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Helping function to create a linked list with a cycle
function createLinkedList(values, pos) {
    let head = null;
    let tail = null;
    let cycleNode = null;

    values.forEach((val, index) => {
        const newNode = new ListNode(val);
        if (!head) {
            head = newNode;
            tail = head;
        } else {
            tail.next = newNode;
            tail = newNode;
        }

        if (index === pos) {
            cycleNode = newNode;
        }
    });

    if (tail && cycleNode) {
        tail.next = cycleNode; // Creating the cycle
    }

    return head;
}

// Function to detect cycle
function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

const head1 = createLinkedList([3, 2, 0, -4], 1); // pos = 1
console.log(hasCycle(head1)); // Output: true

const head2 = createLinkedList([1, 2], 0); // pos = 0
console.log(hasCycle(head2)); // Output: true

const head3 = createLinkedList([1], -1); // pos = -1 (no cycle)
console.log(hasCycle(head3)); // Output: false
