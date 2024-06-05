/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */

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

// IN ORDER: LEFT -> PARENT -> RIGHT
function inorderTraversal(root: TreeNode | null): number[] {
    // base case: if root is null, return
   if (root == null) return [];
   
   // results
   const nodes = [];
   
   // append the left children if present
   if (root.left) nodes.push(...inorderTraversal(root.left));
   
   // append the parent in-between
   nodes.push(root.val)
   
   // append the right children if present
   if (root.right) nodes.push(...inorderTraversal(root.right));

   return nodes;
};