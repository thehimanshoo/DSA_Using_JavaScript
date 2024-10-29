/*
                                                Remove Duplicates from Shorted List
                                              --------------------------------------

    Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:

    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.


*/

function deleteDuplicatesArray(arr) {
    if (arr.length === 0) return [];

    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    // Remove duplicates in linked list
    current = head;
    while (current && current.next) {
        if (current.val === current.next.val) current.next = current.next.next;
        else current = current.next;
    }

    let result = [];
    current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

console.log(deleteDuplicatesArray([1, 1, 2, 3, 3]));
