// name - Catherine Ihuoma Anokwuru
// email - catherineanokwuru@gmail.com
// github - Catherine-Anokwuru

class TNode<T> {
  data: T;
  lp: TNode<T> | null;
  rp: TNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.lp = null
    this.rp = null
  }
}

class BT<T> {
  root: TNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(val: T) {
    const newNode = new TNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    let queue: TNode<T>[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let current = queue.shift();

      if (current!.lp === null) {
        current!.lp = newNode;
        return;
      } else if (current!.rp === null) {
        current!.rp = newNode;
        return;
      } else {
        queue.push(current!.lp);
        queue.push(current!.rp);
      }
    }
  }

  traverse(): T[] {
    if (!this.root) {
      return [];
    }

    let queue: TNode<T>[] = [];
    queue.push(this.root);

    let travArr: T[] = [];

    while (queue.length > 0) {
      let node = queue.shift();

      travArr.push(node!.data);
      if (node!.lp) {
        queue.push(node!.lp);
      }
      if (node!.rp) {
        queue.push(node!.rp);
      }
    }
    return travArr;
  }

  inOrder(): T[] {
    let result: T[] = [];
    let stack: TNode<T>[] = [];
    let current: TNode<T> | null = this.root;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.lp;
      }
      current = stack.pop() as TNode<T> | null;
      result.push(current!.data);
      current = current!.rp;
    }
    return result;
  }

  preOrder() {
    let result: T[] = [];
    let stack: TNode<T>[] = [];
    let current: TNode<T> | null = this.root;

    while (current || stack.length > 0) {
      while (current) {
        result.push(current.data);
        stack.push(current);
        current = current.lp;
      }
      current = stack.pop() as TNode<T> | null;
      current = current!.rp;
    }
    return result;
  }

  postOrder(): T[] {
    if (!this.root) {
      return [];
    }

    let result: T[] = [];
    let stack: TNode<T>[] = [];
    let lastNode: TNode<T> | null = null;
    let current: TNode<T> | null = this.root;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.lp;
      }
      let peekNode = stack[stack.length - 1];
      if (peekNode.rp && lastNode !== peekNode.rp) {
        current = peekNode.rp;
      } else {
        result.push(peekNode.data);
        lastNode = stack.pop()!;
      }
    }

    return result;
  }
}

const tree = new BT()
tree.insert(10)
tree.insert(15)
tree.insert(20)
tree.insert(5)
tree.insert(25)
console.log(tree.postOrder());
console.log(tree.preOrder());
console.log(tree.inOrder());

