// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to create a linked list from 0 to 9
function createLinkedList() {
  let head = new LinkedList(0); // Start with the first node (value 0)
  let current = head;

  // Loop through and create nodes for values 1 to 9
  for (let i = 1; i <= 9; i++) {
    current.next = new LinkedList(i); // Create new node and link it
    current = current.next; // Move to the new node
  }

  return head; // Return the head of the list
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let count = 0;
  let current = head;
  while (current !== null) {
    count++;
    current = current.next;
  }

  const dummy = new LinkedList(-100);
  dummy.next = head;
  let left = dummy;
  let right = head;

  // If k is greater than the length of the list, return the list without any changes
  if (k >= count) {
    left.next = left.next.next;
    return dummy.next;
  }

  for (let i = 0; i < k; i++) {
    if (right === null) return head;
    right = right.next;
  }
  while (right !== null) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return dummy.next;
}

const head = createLinkedList();
console.log(removeKthNodeFromEnd(head, 10));
