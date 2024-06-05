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

function levelOrder(root: TreeNode | null): number[][] {
    if (root == null) return [];

    let levelQueue: TreeNode[] = [root];
    const results: number[][] = [];

    // While the queue isn't empty
    while (levelQueue.length > 0) {
        const subtree = [];
        const subLevel = [];

        // Regular level traversal using queues
        for (const node of levelQueue) {
            subtree.push(node.val);
            
            // Push left and right children in order if present
            if (node.left) subLevel.push(node.left);
            if (node.right) subLevel.push(node.right);
        }

        // We're now in the next level + push subtree nodes
        levelQueue = subLevel;
        results.push(subtree);
    }

    return results;
}