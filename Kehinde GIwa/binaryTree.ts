// binary tree is a tree that has a very bug node called root AND VERY SMALL NODES
// Kehinde Giwa 
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
  output: T[] = [];
  //  append(value){
  // const newNode = new TNode(2)

  // }
  Bftraversal() {
    const queue: TNode<number>[] = [];
    // If there is no root
    if (!this.root) return;
    // If there is a root
    queue.push(this.root);

    while (queue.length > 0) {
      let rem = queue.shift();
      this.output.push(rem!.data);
      if (rem!.left) queue.push(rem!.left);
      if (rem!.right) queue.push(rem!.right);
    }
    return this.output;
  }

  preOrder(node: TNode<number> | null) {
    if (!node) return [];
    let output: number[] = [];

    output.push(node.data);
    output.push(...this.preOrder(node?.left!));
    output.push(...this.preOrder(node?.right!));
    return output;
  }
  inOrder(node: TNode<number> | null){
    if (!node) return [];
    let output: number[] = [];
    output.push(...this.inOrder(node?.left!));
    output.push(node.data);
    output.push(...this.inOrder(node?.right!));
    return output;
  }
  postOrder(node: TNode<number> | null){
    if (!node) return [];
    let output: number[] = [];
    output.push(...this.postOrder(node?.left!));
    output.push(...this.postOrder(node?.right!));
    output.push(node.data);
    return output;
  }
}

const t = new BinaryTree();
const rootNode = new TNode<number>(1);
t.root = rootNode;
const e = new TNode<number>(2);
const f = new TNode<number>(3);
const g = new TNode<number>(4);
const h = new TNode<number>(5);
t.root = rootNode;
rootNode.left = e;
rootNode.right = f;
e.left = g;
e.right = h;

console.log(t.root);
console.log(t.postOrder(rootNode));
