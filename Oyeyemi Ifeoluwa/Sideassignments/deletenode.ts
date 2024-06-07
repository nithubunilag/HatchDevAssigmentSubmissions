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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
        return root
    }

    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    }
    else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    }
    else {
        if (root.left === null) {
            return root.right
        }
        else if (root.right === null) {
            return root.left
        }

        
        let currParent = root
        let curr = root.right
        while (curr.left) {
            currParent = curr
            curr = curr.left
        }

        root.val = curr.val

        currParent.left = deleteNode(currParent.left, curr.val)
    }

    return root
};