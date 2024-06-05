class NodeListNode<T> {
  constructor(public data: T, public next: NodeListNode<T> | null = null) {}
}

class LinkedNodeList<T> {
  constructor(public head: NodeListNode<T> | null = null) {}

  add(val: T) {
    const newNode = new NodeListNode(val);

    // if we dont have a head...
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // if we have a head...
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  preppend(val: T) {
    const newNode = new NodeListNode(val);
    const oldHead = this.head 
    this.head = newNode
    newNode.next = oldHead;
  }

  findANode(val: T){

    if(!this.head){
      return
    }
    let currNode = this.head;
    let pos = 1;

    while(currNode){
      if(currNode.data == val){
        console.log(`found at position ${pos}`);
        return
      }
      pos += 1
      // currNode = currNode.next
    }

  }

  print() {
    // This is the base conditon. Always have one
    let currentNode = this.head; 

    const values: T[] = [];

    while (currentNode !== null) {
      values.push(currentNode.data);
      currentNode = currentNode.next;
    }

    console.log(values.join(' -> '));
  }
}

const nodeList = new LinkedNodeList<number>();
nodeList.add(10);
nodeList.add(12);
nodeList.add(30);
nodeList.add(24);
nodeList.preppend(55);
nodeList.findANode(2);
console.log(nodeList);
nodeList.print();
