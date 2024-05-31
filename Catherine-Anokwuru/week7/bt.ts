class treeNode<T> {
  value: T;
  left: treeNode<T> | null;
  right: treeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binaryTree<T> {
  root: treeNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new treeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      // The while loop is passed in true, it will not run forever because we have return statements inside the loop that will break the loop.
      if (value === current.value) return undefined;
      if (!current.left) {
        current.left = newNode;
        return this;
      }
      current = current.left;

      if (!current.right) {
        current.right = newNode;
        return this;
      }
      current = current.right;
    }
  }

  bfstraverse() {
    const queue: treeNode<T>[] = [];
    const result: T[] = [];
    if (!this.root) return result;
    queue.push(this.root);
    while (queue.length) {
      const current = queue.shift()!; //The exclamation at the end of queue.shift()! tells TypeScript that we know that queue.shift() will never return undefined, so it should not complain about it.
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }

  preOrder(node: treeNode<T> | null): T[] {
    if (!node) return [];

    let output: T[] = [];

    output.push(node?.value!);
    output.push(...this.preOrder(node!.left));
    output.push(...this.preOrder(node!.right));

    return output;
  }

  inOrder(node: treeNode<T> | null): T[] {
    if (!node) return [];

    let output: T[] = [];

    output.push(...this.inOrder(node!.left));
    output.push(node?.value!);
    output.push(...this.inOrder(node!.right));

    return output;
  }

  postOrder(node: treeNode<T> | null): T[] {
    if (!node) return [];

    let output: T[] = [];
    output.push(...this.postOrder(node.left));
    output.push(...this.postOrder(node.right));
    output.push(node?.value);
    return output;
  }

  find(value: T) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (value === current.value) return true;
      if (value < current.value) {
        if (!current.left) return false;
        current = current.left;
      } else {
        if (!current.right) return false;
        current = current.right;
      }
    }
  }
}

const bst = new binaryTree<number>();
bst.insert(10);
bst.insert(15);
bst.insert(20);
bst.insert(5);
bst.insert(25);

console.log(bst.postOrder(bst.root));
console.log(bst.preOrder(bst.root));
console.log(bst.inOrder(bst.root));

// console.log(bst.bfstraverse());
