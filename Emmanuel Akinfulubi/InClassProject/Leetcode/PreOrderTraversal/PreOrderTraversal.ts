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

function preorderTraversal(root: BinaryTreeNode | null): number[] {
  const result: number[] = [];
  const stack: BinaryTreeNode[] = [];

  if (root === null) return result; // Empty tree

  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop()!;
    result.push(node.val);

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return result;
}
