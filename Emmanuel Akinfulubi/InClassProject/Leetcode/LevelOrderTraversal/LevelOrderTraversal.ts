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

function levelOrder(root: BinaryTreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: (BinaryTreeNode | null)[] = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      if (currentNode) {
        currentLevel.push(currentNode.val);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}
