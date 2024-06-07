function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
        return null;
    }

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // If the Node has only one child, either left or Right
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        // If the node has two children, fin the minimun value to replace it in the right subTree of the root
        root.val = findMinNode(root.right).val;

        root.right = deleteNode(root.right, root.val);
    }

    return root;
}

function findMinNode(root: TreeNode): TreeNode {
    // If the left of the root node is null
    while (root!.left === null) {
        return root;
    }
    // else recursively set the root to root.left and run the findMinNode function again
    return findMinNode(root.left);
}