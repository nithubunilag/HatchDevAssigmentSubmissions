
/* * Definition for a binary tree node. */
class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    let queue = [root.left, root.right]

    while (queue.length > 0) {
        // compare
        let i = 0, j = queue.length - 1
        while (i < j) {
            // Left child not eq to right child
            if (queue[i]?.val != queue[j]?.val) return false
            // Update iterators
            i++; j--;
        }

        // add child to queue
        let newQueue = []
        for (let node of queue) {
            if (node == null) continue
            newQueue.push(node.left)
            newQueue.push(node.right)
        }
        queue = newQueue
    }

    return true
};