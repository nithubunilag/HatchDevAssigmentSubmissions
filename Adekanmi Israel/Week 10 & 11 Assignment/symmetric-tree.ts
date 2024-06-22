// Adekanmi Israel
// adekanmiisrael8@gmail.com
// github.com/Israel-Adekanmi


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    if(!root) {
      return true;
    } 
  
return checkNode(root.left, root.right);
  
  };

  
function checkNode(left: TreeNode | null, right: TreeNode | null): boolean {
  if (left === null && right === null) {
    return true;
  }
  if (left === null || right === null) {
    return false;
  }
  if (left.val !== right.val) {
    return false;
  }
  return checkNode(left.left, right.right) && checkNode(left.right, right.left);
}

