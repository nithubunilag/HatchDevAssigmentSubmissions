class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | null;

  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode | null;
  tail: SinglyLinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData: number): void {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }

    this.tail = node;
  }
}

// function printSinglyLinkedList(
//   node: SinglyLinkedListNode | null,
//   sep: string,
//   ws: WriteStream
// ): void {
//   while (node != null) {
//     ws.write(String(node.data));

//     node = node.next;

//     if (node != null) {
//       ws.write(sep);
//     }
//   }
// }

function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
  // if list is empty return list
  if (!llist) {
    return llist;
  }

  // create a stack
  const stack: SinglyLinkedListNode[] = [];
  // initialize the list item to current
  let current: SinglyLinkedListNode | null = llist;

  // while we have an item in the list, push into the stack then change the current to be current.next
  while(current){
    stack.push(current)
    current = current.next
  }

  const newHead = stack[stack.length - 1];
  while (stack.length > 0) {
    const lastNode = stack.pop();
    lastNode!.next = stack[stack.length - 1];
  }

  return newHead;
}


