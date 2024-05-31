class LNode<T> {
  data: T;
  next: LNode<T> | null;

  constructor(val: T) {
    this.data = val;
    this.next = null;
  }
}

class LLNode<T> {
  head: LNode<T> | null;
  stack: T[];

  constructor() {
    this.head = null;
    this.stack = [];
  }

  push(val: T) {
    let currentNode = this.head;
    let newNode = new LNode(val);
    if (!currentNode) {
      currentNode = newNode;
    }

    while (currentNode) {
      this.stack.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek(){
    return this.stack[this.stack.length-1]
  }

  size(){
   return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }

}

const LL = new LLNode();
LL.push("a");
LL.push("b");
LL.push("c");
LL.print();

LL.peek();
LL.size()
LL.pop()
LL.size()

LL.push("d");
LL.print();
