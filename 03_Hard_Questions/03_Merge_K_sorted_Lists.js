/*
                                                Merge k Sorted Lists
                                               ----------------------

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
 
Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]

Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]

merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []

Constraints:
    k == lists.length
    0 <= k <= 104
    0 <= lists[i].length <= 500
    -104 <= lists[i][j] <= 104

    lists[i] is sorted in ascending order.
    The sum of lists[i].length will not exceed 104.

*/

class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
};

function mergeKLists(lists) {
  if (!lists || lists.length === 0) return null;

  // Min-heap (priority queue) to store the smallest elements from each list
  const minHeap = new MinHeap();  

  // Insert the first node of each list into the min-heap
  for (let list of lists) {
      if (list) {
          minHeap.insert(list);
      }
  }

  // Dummy node to simplify the merging process
  const dummy = new ListNode();
  let current = dummy;

  // Extract the smallest element from the heap and add it to the merged list
  while (!minHeap.isEmpty()) {
      const smallestNode = minHeap.extractMin();
      current.next = smallestNode;
      current = current.next;

      // If the extracted node has a next node, insert it into the heap
      if (smallestNode.next) {
          minHeap.insert(smallestNode.next);
      }
  }

  return dummy.next;
}

// MinHeap implementation for the priority queue
class MinHeap {
  constructor() {
      this.heap = [];
  }

  insert(node) {
      this.heap.push(node);
      this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
      if (this.isEmpty()) return null;
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = last;
          this.bubbleDown(0);
      }
      return min;
  }

  isEmpty() {
      return this.heap.length === 0;
  }

  bubbleUp(index) {
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex].val <= this.heap[index].val) break;
          [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
          index = parentIndex;
      }
  }

  bubbleDown(index) {
      while (true) {
          const leftChildIndex = 2 * index + 1;
          const rightChildIndex = 2 * index + 2;
          let smallestIndex = index;

          if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallestIndex].val) {
              smallestIndex = leftChildIndex;
          }

          if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallestIndex].val) {
              smallestIndex = rightChildIndex;
          }

          if (smallestIndex === index) break;

          [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
          index = smallestIndex;
      }
  }
}

// Example usage:
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const lists = [list1, list2, list3];
const mergedList = mergeKLists(lists);

// Function to print the merged linked list
function printList(head) {
  let current = head;
  const result = [];
  while (current) {
      result.push(current.val);
      current = current.next;
  }
  console.log(result);
}

printList(mergedList);    // Output: [1, 1, 2, 3, 4, 4, 5, 6]