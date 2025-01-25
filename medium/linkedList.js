class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  setHead(val) {
    const newNode = new ListNode(val);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  insertBefore(val, index) {
    if (index === 0) {
      setHead(val);
      return;
    }

    let current = this.head;
    let currentIdx = 0;
    const newNode = new ListNode(val);
    while (current !== null && currentIdx < index) {
      current = current.next;
      currentIdx++;
    }

    if(currentIdx !== index) {
      
    }

    const temp = current.next;
    current.next = newNode;
    newNode.next = temp;
  }

  printList() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }
}
