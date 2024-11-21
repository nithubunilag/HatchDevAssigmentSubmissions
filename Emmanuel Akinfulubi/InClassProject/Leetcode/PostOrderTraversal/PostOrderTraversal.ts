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

function postorderTraversal(root: BinaryTreeNode | null): number[] {
  const result: number[] = [];
  const stack: BinaryTreeNode[] = [];
  let current: BinaryTreeNode | null = root;
  let lastVisited: BinaryTreeNode | null = null;

  while (current || stack.length > 0) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      let peekNode = stack[stack.length - 1];
      if (peekNode.right && peekNode.right !== lastVisited) {
        current = peekNode.right;
      } else {
        result.push(peekNode.val);
        lastVisited = stack.pop()!;
      }
    }
  }

  return result;
}

// class TreeElement {
//   data: number;
//   leftChild: TreeElement | null;
//   rightChild: TreeElement | null;

//   constructor(
//     data: number,
//     leftChild: TreeElement | null = null,
//     rightChild: TreeElement | null = null
//   ) {
//     this.data = data;
//     this.leftChild = leftChild;
//     this.rightChild = rightChild;
//   }
// }

// function performPostOrderDFS(rootNode: TreeElement | null): number[] {
//   const traversalResult: number[] = [];

//   function postOrderHelper(node: TreeElement | null) {
//     if (node === null) {
//       return;
//     }

//     postOrderHelper(node.leftChild);
//     postOrderHelper(node.rightChild);
//     traversalResult.push(node.data);
//   }

//   postOrderHelper(rootNode);
//   return traversalResult;
// }

// const root = new TreeElement(10);
// root.leftChild = new TreeElement(20);
// root.rightChild = new TreeElement(30);
// root.leftChild.leftChild = new TreeElement(40);
// root.leftChild.rightChild = new TreeElement(50);
// root.rightChild.leftChild = new TreeElement(60);
// root.rightChild.rightChild = new TreeElement(70);

// const result = performPostOrderDFS(root);
// console.log(result);
