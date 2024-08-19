class TreessNode {
    val: number;
    left: TreessNode | null;
    right: TreessNode | null;
    constructor(val?: number, left?: TreessNode | null, right?: TreessNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}



function deleteNode(root: TreessNode | null, key: number): TreessNode | null {
if (root === null) {
    return null;
}

// Find the node to be deleted
if (key < root.val) {
    root.left = deleteNode(root.left, key);
} else if (key > root.val) {
    root.right = deleteNode(root.right, key);
} else {
    // Node found
    if (root.left === null && root.right === null) {
        // Case 1: Node is a leaf
        return null;
    } else if (root.left === null) {
        // Case 2: Node has one child (right)
        return root.right;
    } else if (root.right === null) {
        // Case 2: Node has one child (left)
        return root.left;
    } else {
        // Case 3: Node has two children
        // Find the in-order successor (smallest node in the right subtree)
        let successor = findMin(root.right);
        // Replace root's value with successor's value
        root.val = successor.val;
        // Delete the successor node
        root.right = deleteNode(root.right, successor.val);
    }
}
return root;
}

function findMin(node: TreessNode): TreessNode {
while (node.left !== null) {
    node = node.left;
}
return node;
}
