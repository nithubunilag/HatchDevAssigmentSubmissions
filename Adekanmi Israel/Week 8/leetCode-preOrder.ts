// Adekanmi Israel
// adekanmiisrael8@gmail.com
// github.com/Israel-Adekanmi

//Definition for a binary tree node.
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
      return [];
    }

    const stack: TreeNode[] = [];
    const output: number[] = [];

    stack.push(root);

    while (stack.length > 0) {
      const currentNode = stack.pop()!;
      output.push(currentNode.val);

      // Push right child first so that left is processed first
      if (currentNode.right !== null) {
        stack.push(currentNode.right);
      }
      if (currentNode.left !== null) {
        stack.push(currentNode.left);
      }
    }

    return output;
};