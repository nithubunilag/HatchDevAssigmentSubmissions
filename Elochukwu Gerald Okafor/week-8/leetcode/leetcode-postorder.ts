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

// Post Order: LEFT -> RIGHT -> PARENT
function postorderTraversal(root: TreeNode | null): number[] {
    // base case: if root is null, return
    if (root == null) return [];
    
    // results
    const nodes = [];
    
    // append the left children if present
    if (root.left) nodes.push(...postorderTraversal(root.left));
    
    // append the right children if present
    if (root.right) nodes.push(...postorderTraversal(root.right));

    // append the parent lastly
    nodes.push(root.val)

    return nodes;
};