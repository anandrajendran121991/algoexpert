/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let linkedListCount = 0;
  let tail = head;
  while (tail !== null) {
    linkedListCount++;
    tail = tail.next;
  }

  let rightStartPosition = linkedListCount - (k % linkedListCount);
  let leftEndPosition = rightStartPosition - 1;

  let i = 0;
  let current = head;
  while (i < leftEndPosition) {
    current = current.next;
    i++;
  }

  let newHead = current.next;

  current.next = null;
  tail.next = head;
  return newHead;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);

console.log(rotateRight());
