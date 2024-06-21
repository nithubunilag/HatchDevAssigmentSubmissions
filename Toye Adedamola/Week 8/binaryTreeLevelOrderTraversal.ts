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

function levelOrder(root: TreeNode): number[][] {
    if (root === null) {
        return [];
    }

    let queue: TreeNode[] = [root];
    let finalTraversed: number[][] = [];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevelTraversed: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()!;

            currentLevelTraversed.push(currentNode.val);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        finalTraversed.push(currentLevelTraversed);
    }

    return finalTraversed;
};