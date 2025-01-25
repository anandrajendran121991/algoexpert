/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list = new LinkedList(1000);
  let head = list;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      list.next = list1;
      list1 = list1.next;
    } else {
      list.next = list2;
      list2 = list2.next;
    }

    list = list.next;
  }

  if (list1 !== null) {
    list.next = list1;
  } else {
    list.next = list2;
  }

  return head.next;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
  }
}
