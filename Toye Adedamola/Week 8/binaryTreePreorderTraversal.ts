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

function preorderTraversal(root: TreeNode | null): number[] {
    if(!root){
        return [];
    }
    const output: number[] = [];
    output.push(root.val);
    if(root.left !== null){
        output.push(...preorderTraversal(root.left))
    }
    if(root.right !== null){
        output.push(...preorderTraversal(root.right))
    }
    
    return output;
};