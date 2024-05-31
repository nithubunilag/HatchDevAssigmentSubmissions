class CNode {
  data;
  next: CNode | undefined;
  constructor(data) {
    this.data = data;
  }
}

class ClinkedList {
  head: CNode;

  prepend(value) {
    const newNode = new CNode(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next != this.head) {
      currentNode = currentNode.next!;
    }
    newNode.next = this.head;
    this.head = newNode;
    currentNode.next = newNode;
  }

  append(value) {
    const newNode = new CNode(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next != this.head) {
      currentNode = currentNode.next!;
    }
    currentNode.next = newNode;
    newNode.next = this.head;
  }

  delete(pos) {
    let position = 1;
    let size = 1;
    let currentNode = this.head;
    let previousNode = this.head;

    // if the list is empty
    if (!this.head) {
      console.log("the list is empty");
      return;
    }

    while (currentNode?.next != this.head) {
      previousNode = currentNode;
      position++;
      size++;
      currentNode = currentNode?.next!;
      if (pos == position) {
        previousNode.next = currentNode.next;
        currentNode.next = undefined;
        return
        // console.log(previousNode);
      }
    }
    if (pos > size) {
      console.log("Error invalid position: position greater than size");
      return;
    }
    if (pos < 0) {
      console.log("Error position must be positive");
      return;
    }
  }
}
const cll = new ClinkedList();

cll.append(2);
cll.append(3);
cll.prepend(1);
cll.append(5);
cll.append(4);
cll.delete(4);
console.log(cll);
