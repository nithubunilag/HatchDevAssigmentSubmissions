//  Onabanjo Tomiwa wearetheassasinationclassroom@gmail.com
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
      return;
    }
    let queue: treeNode<T>[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let curr = queue.shift();
      if (curr!.left === null) {
        curr!.left = newNode;
        return;
      } else if (curr!.right === null) {
        curr!.right = newNode;
        return;
      } else {
        queue.push(curr!.left);
        queue.push(curr!.right);
      }
    }
  }

  search(index) {
    let curr = this.root;
    let count = 0;
    while (curr) {
      if (count == index) {
        console.log(curr.value);
      }
      count++;
      curr = curr.left || curr.right;
    }
  }

  tranversal() {
    if (!this.root) {
      return;
    }

    let queue: treeNode<T>[] = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const curr = queue.shift()!;
      console.log(curr.value);
      if (curr!.left) {
        queue.push(curr!.left);
      }
      if (curr!.right) {
        queue.push(curr!.right);
      }
    }
  }
}

const bt = new binaryTree();

bt.insert(3);
bt.insert(5);
bt.insert(7);
bt.insert(4);
bt.search(0);
bt.tranversal();
