class TreeNode<T> {
  constructor(
    public value: T,
    public left: TreeNode<T> | null = null,
    public right: TreeNode<T> | null = null
  ) {}
}

class BinaryTree<T> {
  root: TreeNode<T> | null = null;

  insert(value: T): BinaryTree<T> | undefined {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return undefined;
      }
    }
  }

  private depthFirstPreOrder(node: TreeNode<T> | null, output: T[] = []): T[] {
    if (node) {
      output.push(node.value);
      this.depthFirstPreOrder(node.left, output);
      this.depthFirstPreOrder(node.right, output);
    }
    return output;
  }

  preorder(): T[] {
    return this.depthFirstPreOrder(this.root);
  }

  traverse(): T[] {
    const queue: TreeNode<T>[] = [];
    const result: T[] = [];
    if (this.root) queue.push(this.root);

    while (queue.length) {
      const current = queue.shift()!;
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }
}

const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log(tree);
console.log("Preorder traversal:", tree.preorder());
console.log("Breadth-first traversal:", tree.traverse());
