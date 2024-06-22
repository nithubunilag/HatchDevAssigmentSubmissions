// Adekanmi Israel
// adekanmiisrael8@gmail.com
// github.com/Israel-Adekanmi

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

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const output: number[] = [];

  output.push(...inorderTraversal(root!.left));
  output.push(root?.val!);
  output.push(...inorderTraversal(root!.right));

  return output;
}
