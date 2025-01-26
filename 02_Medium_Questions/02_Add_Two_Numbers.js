/*
                                                Add Two Numbers
                                               -----------------

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list. You may assume the two numbers 
do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.

*/

// Definition for singly-linked list
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

// Helper function to convert an array to a linked list
function arrayToList(arr) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next;
}

// Main function to add two numbers represented by linked lists
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get the values of the current nodes, or 0 if the node is null
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;
        
        // Calculate sum and carry
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);  // New carry
        current.next = new ListNode(sum % 10);  // Create a new node with the last digit of the sum
        current = current.next;  // Move to the next node
        
        // Move to the next nodes if available
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    
    return dummyHead.next;  // Return the resulting linked list (skip dummy head)
};

// Helper function to convert linked list to array for easy printing
function listToArray(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

// Test cases

let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
console.log(listToArray(result));  // Output: [7, 0, 8]

l1 = arrayToList([0]);
l2 = arrayToList([0]);
result = addTwoNumbers(l1, l2);
console.log(listToArray(result));  // Output: [0]

l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
l2 = arrayToList([9, 9, 9, 9]);
result = addTwoNumbers(l1, l2);
console.log(listToArray(result));  // Output: [8, 9, 9, 9, 0, 0, 0, 1]
