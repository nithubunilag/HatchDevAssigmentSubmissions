class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(
    val?: number,
    left?: BinaryTreeNode | null,
    right?: BinaryTreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversal(root: BinaryTreeNode | null): number[] {
  const result: number[] = [];
  const stack: (BinaryTreeNode | null)[] = [];
  let current: BinaryTreeNode | null = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop()!;
    result.push(current.val);
    current = current.right;
  }

  return result;
}

// class BinaryTreeNode {
//   data: number;
//   leftChild: BinaryTreeNode | null;
//   rightChild: BinaryTreeNode | null;

//   constructor(
//     data: number,
//     leftChild: BinaryTreeNode | null = null,
//     rightChild: BinaryTreeNode | null = null
//   ) {
//     this.data = data;
//     this.leftChild = leftChild;
//     this.rightChild = rightChild;
//   }
// }

// function inorderTraversal(rootNode: BinaryTreeNode | null): number[] {
//   const traversalResult: number[] = [];

//   function traverse(node: BinaryTreeNode | null) {
//     if (node === null) {
//       return;
//     }

//     traverse(node.leftChild);

//     traversalResult.push(node.data);

//     traverse(node.rightChild);
//   }

//   traverse(rootNode);
//   return traversalResult;
// }

// const rootNode = new BinaryTreeNode(1);
// rootNode.leftChild = new BinaryTreeNode(2);
// rootNode.rightChild = new BinaryTreeNode(3);
// rootNode.leftChild.leftChild = new BinaryTreeNode(4);
// rootNode.leftChild.rightChild = new BinaryTreeNode(5);
// rootNode.rightChild.rightChild = new BinaryTreeNode(6);
// rootNode.rightChild.leftChild = new BinaryTreeNode(7);

// const result = inorderTraversal(rootNode);
// console.log(result);
