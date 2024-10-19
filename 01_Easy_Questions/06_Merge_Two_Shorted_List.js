/*
                                                            Merge Two Shorted Lists
                                                          ---------------------------

    You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 

Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  // Create a dummy node to simplify the merging process
  let dummy = new ListNode();
  let current = dummy;

  // Traverse both lists and merge nodes in sorted order
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If there are remaining nodes in either list, append them
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  // Return the merged list starting from the next node of the dummy
  return dummy.next;
}

// Helper function to print the linked list
function printList(node) {
  let result = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  console.log(result);
}

// Example usage:

// Creating two sample sorted linked lists
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// Merging the two lists
let mergedList = mergeTwoLists(list1, list2);

// Printing the merged linked list
printList(mergedList);
