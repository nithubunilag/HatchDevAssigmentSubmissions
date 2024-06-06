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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
         return null;
     }
 
     if (key < root.val) {
         root.left = deleteNode(root.left, key);
     } else if (key > root.val) {
         root.right = deleteNode(root.right, key);
     } else {
         // Node with only one child or no child
         if (root.left === null) {
             return root.right;
         } else if (root.right === null) {
             return root.left;
         }
 
         // Node with two children: Get the inorder successor (smallest in the right subtree)
         let temp = minValueNode(root.right);
         root.val = temp.val;
         root.right = deleteNode(root.right, temp.val);
     }
     
     return root;
 }
 
 function minValueNode(node: TreeNode): TreeNode {
     let current = node;
     while (current.left !== null) {
         current = current.left;
     }
     return current;
 }