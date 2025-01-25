/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const hashMap = {};
  let i = 0;
  while (head) {
    if (i in hashMap) {
      return true;
    }
    hashMap[i] = true;
    i++;
    head = head.next;
  }
  return false;
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(10);
