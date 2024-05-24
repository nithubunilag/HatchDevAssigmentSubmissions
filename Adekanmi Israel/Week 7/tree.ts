class TreeNode<T> {
  data: T;
  leftNode: TreeNode<T> | null;
  rightNode: TreeNode<T> | null;

  constructor(value: T) {
    this.data = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    // let currentRoot = this.root;

    let queue: TreeNode<T>[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let curr = queue.shift();

      if (curr!.leftNode === null) {
        curr!.leftNode = newNode;
        return;
      } else if (curr!.rightNode === null) {
        curr!.rightNode = newNode;
        return;
      } else {
        queue.push(curr!.leftNode);
        queue.push(curr!.rightNode);
      }
    }
  }

  tranverse() {
    if (!this.root) {
      return [];
    }

    const queue: TreeNode<T>[] = [];
    const transOutput: T[] = [];

    let currentNode = this.root;

    queue.push(currentNode);
    while (queue.length > 0) {
      transOutput.push(queue[0].data);
      if (queue[0].leftNode !== null) {
        queue.push(queue[0].leftNode);
      }
      if (queue[0].rightNode !== null) {
        queue.push(queue[0].rightNode);
      }

      queue.splice(0, 1);
    }
    return transOutput;
  }

  //   while (queue.length > 0) {
  //     let currentNode = queue.shift()!;  // Dequeue the front node

  //     transOutput.push(currentNode.data);  // Process the current node

  //     if (currentNode.leftNode !== null) {  // Enqueue left child
  //       queue.push(currentNode.leftNode);
  //     }
  //     if (currentNode.rightNode !== null) {  // Enqueue right child
  //       queue.push(currentNode.rightNode);
  //     }
  //   }

  //   return transOutput;
}

const newTree = new BinaryTree<number>();
newTree.root = new TreeNode(1);
newTree.root.leftNode = new TreeNode(4);
newTree.root.rightNode = new TreeNode(3);
newTree.root.leftNode.leftNode = new TreeNode(4);

console.log(newTree.tranverse());
