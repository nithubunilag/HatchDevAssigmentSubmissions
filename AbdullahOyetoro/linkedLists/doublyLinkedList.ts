class DNode<T> {
  data: T;
  next: DNode<T> | null = null;
  before: DNode<T> | null = null;

  constructor(val: T) {
    this.data = val;
  }
}

class DoublyLinkedList<T> {
  head: DNode<T> | null = null;

  getcurrentNode(position?: number): DNode<T> | null {
    if (position && position <= 1000) {
      let test = this.checkcycle();
    }

    let currentNode = this.head;
    let currentPosition = 0;

    while (currentNode && currentNode.next !== null) {
      if (position && currentPosition === position) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentPosition++;
    }
    
    return currentNode;
  }

  private append(val: T): void {
    let newNode = new DNode(val);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.getcurrentNode();
    if (currentNode) {
      currentNode.next = newNode;
      newNode.before = currentNode;
    }
  }

  add(val: T, position?: number): void {
    if (position === undefined) {
      this.append(val);
      return;
    }

    let newNode = new DNode<T>(val);

    if (position <= 0) {
      let oldHead = this.head;
      this.head = newNode;
      if (oldHead) {
        newNode.next = oldHead;
        oldHead.before = newNode;
      }
      return;
    }

    let currentNode = this.head;
    let currentPosition = 0;

    while (currentNode && currentPosition < position - 1) {
      currentNode = currentNode.next;
      currentPosition++;
    }

    if (currentNode) {
      newNode.next = currentNode.next;
      if (currentNode.next) {
        currentNode.next.before = newNode;
      }
      currentNode.next = newNode;
      newNode.before = currentNode;
    } else {
      this.append(val);
    }
  }

  checkcycle(): boolean {
    if (!this.head) return false;

    let rabbit = this.head;
    let hare = this.head;

    while (hare && hare.next) {
      rabbit = rabbit.next!;
      hare = hare.next.next!;

      if (rabbit === hare) {
        return true;
      }
    }

    return false;
  }

  delete(val: T): void {
    if (!this.head) return;

    let currentNode = this.head;

    if (val === this.head.data) {
      this.head = currentNode.next;
      if (this.head) {
        this.head.before = null;
      }
      return;
    }

    while (currentNode.next) {
      if (val === currentNode.next.data) {
        let nodeToDelete = currentNode.next;
        currentNode.next = nodeToDelete.next;
        if (nodeToDelete.next) {
          nodeToDelete.next.before = currentNode;
        }
        return;
      }
      currentNode = currentNode.next;
    }
    console.log("not found");
  }
}

const doubly = new DoublyLinkedList<string>();

doubly.add("abdull", 2);
doubly.add("iyonuoluwa", 2);
doubly.add('tola', 1);
doubly.add("fola");
doubly.add("Ade", 0);
doubly.add('tito', 2);
// doubly.delete("abdull");

console.log(doubly.head);
console.log(doubly.checkcycle());