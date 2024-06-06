/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

function InOrderTraversal(root: TreeNode<number> | null): number[] {
  const output: number[] = [];

  function traverse(node?: TreeNode<number>) {
    if (node == null) return;

    traverse(node.left);
    output.push(node.data);
    traverse(node.right);
  }

  traverse(root);
  return output
};