
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

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
//   // ws: WriteStream
// ): void {
//   while (node != null) {
//     ws.write(String(node.data));

//     node = node.next;

//     if (node != null) {
//       ws.write(sep);
//     }
//   }
// }


function removeDuplicates(
  llist: SinglyLinkedListNode
): SinglyLinkedListNode {
  // Write your code here
  if (!llist) {
    return llist;
  }
  let currentNode = llist;
  while (currentNode.next) {
    if (currentNode.data === currentNode.next.data) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return llist;
}

