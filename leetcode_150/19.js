/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Create a dummy node to handle edge cases
  const dummy = new ListNode(0, head);
  let first = dummy;
  let second = dummy;

  // Move the first pointer `n+1` steps ahead
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Move both pointers until the first pointer reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // Remove the nth node
  second.next = second.next.next;

  return dummy.next; // Return the modified list
};
