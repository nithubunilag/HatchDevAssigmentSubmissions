/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

function preOrderTraversal(root: TreeNode<number> | null): number[] {
  const output: number[] = [];

  function traverse(node?: TreeNode<number>) {
    if (node == null) return;

    output.push(node.data);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return output
};