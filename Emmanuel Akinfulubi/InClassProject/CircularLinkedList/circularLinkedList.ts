class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  append(value: any) {
    const newNode = new ListNode(value);
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
    } else {
      if (this.head.next) {
        newNode.next = this.head.next;
      } else {
        newNode.next = this.head;
      }
      this.head.next = newNode;
    }
  }

  prepend(value: any) {
    const newNode = new ListNode(value);
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
    } else {
      if (this.head.next) {
        newNode.next = this.head.next;
      } else {
        newNode.next = this.head;
      }
      this.head.next = newNode;
      this.head = newNode;
    }
  }

  remove(value: any) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    if (current.next === this.head && current.value === value) {
      this.head = null;
      return;
    }

    while (current.next !== this.head) {
      if (current.next && current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next!;
    }

    if (this.head.value === value) {
      current.next = this.head.next;
      this.head = current.next;
    }
  }

  traverse(callback: (value: any) => void) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    do {
      callback(current.value);
      current = current.next!;
    } while (current !== this.head);
  }

  shuffle() {
    if (!this.head) {
      return;
    }

    const nodesArray: ListNode[] = [];
    let current = this.head;
    do {
      nodesArray.push(current);
      current = current.next!;
    } while (current !== this.head);

    for (let i = nodesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nodesArray[i], nodesArray[j]] = [nodesArray[j], nodesArray[i]];
    }

    this.head = nodesArray[0];
    for (let i = 0; i < nodesArray.length; i++) {
      nodesArray[i].next = nodesArray[(i + 1) % nodesArray.length];
    }
  }
}

const circularList = new CircularLinkedList();
circularList.append("A");
circularList.append("B");
circularList.append("C");
circularList.shuffle();
circularList.traverse((value) => console.log(value));
