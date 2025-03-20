class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtHead(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  insertAtTail(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let prev = null;
      let current = this.head;
      while (current !== null) {
        prev = current;
        current = current.next;
      }
      prev.next = newNode;
    }

    this.size++;
  }

  insertAtIndex(idx, value) {
    if (idx < 0 || idx > this.size) {
      return -1;
    }

    if (idx === 0) {
      this.insertAtHead(value);
    } else if (idx === this.size) {
      this.insertAtTail(value);
    } else {
      let prev = null;
      let i = 0;
      let curr = this.head;
      while (i < idx) {
        i++;
        prev = curr;
        curr = curr.next;
      }

      const newNode = new ListNode(value);
      prev.next = newNode;
      newNode.next = curr;
      this.size++;
    }
  }

  getAtIndex(idx) {
    if (idx < 0 || idx >= this.size) {
      return -1;
    }

    let curr = this.head;
    let i = 0;
    while (i < idx) {
      curr = curr.next;
      i++;
    }
    return curr.value;
  }

  removeAtIndex(idx) {
    if (idx < 0 || idx >= this.size) {
      return -1;
    }

    let current = this.head;

    if (idx === 0) {
      this.head = this.head.next;
    } else {
      let prev = null;
      let i = 0;
      while (i < idx) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = current.next;
    }

    this.size--;
  }

  clear() {
    this.head = null;
    this.size = 0;
    console.log("LinkedList Size: ", this.size);
  }

  print() {
    let current = this.head;
    const linkedList = [];
    while (current !== null) {
      linkedList.push(current.value);
      current = current.next;
    }

    console.log("LinkedList Nodes: ", linkedList);
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = curr;
      current = next;
    }

    this.head = prev;
  }

  isCycle() {
    let current = this.head;
    let slow = current;
    let fast = current;
    while (slow !== null && fast !== null) {
      slow = slow.next;
      fast = fast?.next?.next;
      if (slow === fast) {
        return true;
      }
    }

    return false;
  }

  middleNode() {
    let slow = this.head;
    let fast = this.head;
    while (slow !== null && fast?.next) {
      slow = slow.next;
      fast = fast?.next?.next;
    }

    return slow;
  }
}
