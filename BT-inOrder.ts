class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

function traverse(node: TreeNode | null) {
    if (node === null) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
}

traverse(root);
return result;
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root)); 