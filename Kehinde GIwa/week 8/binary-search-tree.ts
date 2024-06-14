class TNode {
  left: TNode | null;
  right: TNode | null;
  value;
  constructor(value) {
    this.value = value;
  }
}

class binarySearchTree {
  root: TNode | null;

  constructor() {
    this.root = null;
  }

  insertNode(newNode: TNode, node: TNode) {
    if (newNode.value < node.value) {
      if (!node.left) node.left = newNode;
      else {
        this.insertNode(newNode, node.left);
      }
    }
    else{
        if (!node.right) node.right = newNode;
        else {
          this.insertNode(newNode, node.right);
        } 
    }
  }

  insert(val: number) {
    const newNode = new TNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(newNode, this.root);
  }
}

const b = new binarySearchTree()
b.insert(17)
b.insert(13)

console.log(b.root)