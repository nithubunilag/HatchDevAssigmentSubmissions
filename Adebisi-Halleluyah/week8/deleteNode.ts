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

if (key < root.val) {
    root.left = deleteNode(root.left, key);
} else if (key > root.val) {
    root.right = deleteNode(root.right, key);
} else {
    // Node to be deleted found

    // Case 1: Node has no children (leaf node)
    if (!root.left && !root.right) {
        return null;
    }

    // Case 2: Node has one child
    if (!root.left) {
        return root.right;
    } else if (!root.right) {
        return root.left;
    }

    // Case 3: Node has two children
    let successor = findMin(root.right);
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
}
return root;
};

function findMin(node: TreeNode): TreeNode {
while (node.left) {
    node = node.left;
}
return node;
}
