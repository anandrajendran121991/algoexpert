/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(-1);
  let current = head;
  let nodeOne = l1;
  let nodeTwo = l2;
  let carry = 0;
  while (nodeOne || nodeTwo || carry != 0) {
    let x = nodeOne !== null ? nodeOne.val : 0;
    let y = nodeTwo !== null ? nodeTwo.val : 0;
    let sum = x + y + carry;
    const newValue = Math.floor(sum % 10);
    current.next = new ListNode(newValue);
    current = current.next;
    carry = Math.floor(sum / 10);
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
    nodeOne = nodeOne !== null ? nodeOne.next : null;
  }

  return head.next;
};
