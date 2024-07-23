// binary tree is a tree that has a very bug node called root AND VERY SMALL NODES

class TNode<T> {
  data: T;
  left: TNode<T> | null;
  right: TNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TNode<number>;
  //  append(value){
  // const newNode = new TNode(2)

  // }
  traversal() {
    const queue: TNode<number>[] = [];
    const travArray: TNode<number>[] = [];
    // If there is no root
    if (!this.root) return;
    // If there is a root
    queue.push(this.root);

    while (queue.length > 0) {
      let rem = queue.shift();
      travArray.push(rem!);
      if (rem!.left) queue.push(rem!.left);
      if (rem!.right) queue.push(rem!.right);
    }
  }
}
