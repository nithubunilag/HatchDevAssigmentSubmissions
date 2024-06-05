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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;
    
    /*
        * Binary Search Tree Property:
        * Elements to the left of a parent are less than the parent.
        * Elements to the right of a parent are greater than the parent.
    */
    if (key < root.val) {
        // Move left
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        // Move right
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        let nextNode = root.right;
        while (nextNode.left) {
            nextNode = nextNode.left;
        }

        root.val = nextNode.val;
        root.right = deleteNode(root.right, nextNode.val);
    }

    return root;
};