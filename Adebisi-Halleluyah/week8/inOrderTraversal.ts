
/**In Order Traversal
 * 
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

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

   function traverse(node: TreeNode | null): void {
       if (node === null) {
           return;
       }

       // Visit left subtree
       traverse(node.left);
       // Visit root node
       result.push(node.val
       );
       // Visit right subtree
       traverse(node.right);
   }

   traverse(root);
   return result;
   
};