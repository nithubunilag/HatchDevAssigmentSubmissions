/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

function postOrderTraversal(root: TreeNode<number> | null): number[] {
  const output: number[] = [];

  function traverse(node?: TreeNode<number>) {
    if (node == null) return;


    traverse(node.left);
    traverse(node.right);
    output.push(node.data);
  }

  traverse(root);
  return output
};