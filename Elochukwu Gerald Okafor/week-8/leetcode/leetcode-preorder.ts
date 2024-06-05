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

// Pre Order: PARENT -> LEFT -> RIGHT
function preorderTraversal(root: TreeNode | null): number[] {
    // base case: if root is null, return
    if (root == null) return [];
    
    // results
    const nodes = [];

    // append the parent first
    nodes.push(root.val)
    
    // append the left children if present
    if (root.left) nodes.push(...preorderTraversal(root.left));
    
    // append the right children if present
    if (root.right) nodes.push(...preorderTraversal(root.right));

    return nodes;
};