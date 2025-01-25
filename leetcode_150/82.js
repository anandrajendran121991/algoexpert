/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const hashMap = {};
  let current = head;
  while (current !== null) {
    const val = current.val;
    if (hashMap.has(val)) {
      hashMap[val] = false;
    } else {
      hashMap[val] = true;
    }
    current = current.next;
  }

  const dummyHead = new ListNode(-100);
  let newCurrent = dummyHead;
  for (const [key, val] of Object.entries(hashMap)) {
    if (val) {
      newCurrent.next = new ListNode(key);
      newCurrent = newCurrent.next;
    }
  }

  return dummyHead.next;
};
