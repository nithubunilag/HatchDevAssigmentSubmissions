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

function levelOrder(root: TreeNode | null): number[][] {
    let returnValues = []
    if (!root) {
     return returnValues
    }
    const queue: TreeNode[] = [];
    const result: number[][] = [];
 
    queue.push(root)
    while(queue.length > 0) {
     let hold: number[] = [];
     let levelOrderNodes: number = queue.length
 
     for(let i = 0; i < levelOrderNodes; i++){
         let curr: TreeNode = queue.shift();
         hold.push(curr.val)
 
         if(curr.left) {
             queue.push(curr.left)
         }
         if(curr.right) {
             queue.push(curr.right)
         }
     }
     result.push(hold);
    }
    return result
 };