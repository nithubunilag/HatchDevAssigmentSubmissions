class arrTree {
  tree: number[];

  constructor() {
    this.tree = [];
  }

  insert(value: number) {
    return this.tree.push(value);
  }

  // to get the value of the left node
  getLeftnode(i) {
    let leftIndex = 2 * i + 1;
    return this.tree[leftIndex];
  }

  getRightNode(i) {
    let rightIndex = 2 * i + 2;
    return this.tree[rightIndex];
  }

  getParentNode(i) {
    if (i === 0) {
      return undefined;
    }

    let parentIndex = Math.floor((i - 1) / 2);
    return this.tree[parentIndex];
  }

  displayTree(): void {
    console.log("Binary Tree:");
    console.log(this.tree);
  }
}

const at = new arrTree();

at.insert(1);
at.insert(2);
at.insert(3);
at.insert(4);
at.insert(5);
at.insert(6);
at.insert(7);
at.insert(8);
at.insert(9);

console.log(at.getParentNode(0));
at.displayTree();
