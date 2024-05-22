class LNode<T>{
  data:T
  next:LNode<T>
  constructor(val:T){
    this.data = val
  }
}

class CircularLinkedList<T> {
  head: LNode<T> | null = null;
  private getcurrentNode(position?: number): LNode<T> | null {
    if (!this.head) return null;
    let currentNode = this.head;
    if (position !== undefined) {
      let currentPosition = 1;
      while (currentPosition !== position) {
        if (currentNode.next === this.head) {
          console.log(`Reached the tail; the list has ${currentPosition} node(s).`);
          return currentNode;
        }
        if (position === -1 && currentNode.next && currentNode.next.next === this.head) {
          console.log(`Reached the penultimate node at position ${currentPosition}`);
          return currentNode;
        }
        if (currentPosition === (position - 1)) {
          return currentNode;
        }
        if (currentNode.next) {
          currentNode = currentNode.next;
          currentPosition++;
        } else {
          break;
        }
      }
    } else {
      while (currentNode.next && currentNode.next !== this.head) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    return currentNode;
  }

  getlistlength(): number {
    if (!this.head) return 0;
    if (this.head.next === this.head) return 1;
    let currentLength = 1;
    let currentNode = this.head;
    while (currentNode.next && currentNode.next !== this.head) {
      currentNode = currentNode.next;
      currentLength++;
    }
    return currentLength;
  }

  append(val: T): void {
    let newNode = new LNode(val);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head; // Make it circular
      return;
    }
    let currentNode = this.getcurrentNode();
    if (currentNode) {
      currentNode.next = newNode;
      newNode.next = this.head;
    }
  }

  prepend(val: T): void {
    let newNode = new LNode(val);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
      return;
    }
    let currentNode = this.getcurrentNode();
    if (currentNode) {
      newNode.next = this.head;
      this.head = newNode;
      currentNode.next = this.head;
    }
  }

  add(val: T, position?: number): void {
    if (!this.head) {
      this.head = new LNode(val);
      this.head.next = this.head;
      return;
    }
    if (position === undefined || position <= 1) {
      this.prepend(val);
      return;
    }
    let newNode = new LNode(val);
    let length = this.getlistlength();
    if (position > length) {
      console.log(`Invalid position`);
      return;
    }
    let currentNode = this.getcurrentNode(position);
    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  deletebyPosition(position?: number): void {
    if (!this.head || this.head.next === this.head) {
      console.log(`Can't delete from a list with one or no nodes.`);
      this.head = null;
      return;
    }
    if (!position || position <= 1) {
      let currentNode = this.getcurrentNode();
      if (currentNode && this.head) {
        currentNode.next = this.head.next;
        this.head = this.head.next;
      }
      return;
    }
    let currentNode = this.getcurrentNode(position);
    if (currentNode && currentNode.next) {
      if (currentNode.next === this.head) {
        console.log('This is the last node in the list');
        let penultimateNode = this.getcurrentNode(-1);
        if (penultimateNode) {
          penultimateNode.next = this.head;
        }
      } else {
        currentNode.next = currentNode.next.next;
      }
    }
  }

  deleteByVal(val: T): void {
    if (!this.head) return;
    let currentNode = this.head;
    let currentPosition = 1;
    do {
      if (currentNode.data === val) {
        this.deletebyPosition(currentPosition);
        return;
      }
      currentNode = currentNode.next;
      currentPosition++;
    } while (currentNode && currentNode !== this.head);
  }
}

const clist2 = new CircularLinkedList<string>();
clist2.add("quid")
clist2.append("stop")
clist2.add("quo",3);
clist2.add("pro",1);
// clist2.delete()



console.log(clist2.head)

