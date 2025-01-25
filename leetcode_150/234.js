class ListNode {
  constructor(value) {
    this.value = value; // Value of the node
    this.next = null; // Pointer to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Head of the linked list
  }

  // Add a new node to the end of the list
  append(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Print the list values
  print() {
    let current = this.head;
    let output = "";
    while (current !== null) {
      output += current.value + " -> ";
      current = current.next;
    }
    console.log(output + "null");
  }

  // Remove a node with a specific value
  remove(value) {
    if (this.head === null) return; // List is empty
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }
}

// Example usage:
const head = new LinkedList();
head.append(1);
head.append(2);
head.append(2);
head.append(3);

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;
  let slow = head;
  let fast = head;
  while (slow !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  console.log(slow);
  //   console.log(head);
};

const stringifyList = (node) => {
  const seen = new Set();
  return JSON.stringify(
    node,
    (key, value) => {
      if (key === "next" && value !== null) {
        if (seen.has(value)) return "[Circular]"; // Avoid circular references
        seen.add(value);
      }
      return value;
    },
    2 // Pretty-print with indentation
  );
};

console.log(isPalindrome(head));
