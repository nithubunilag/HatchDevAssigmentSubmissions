function deleteNode(root: TreeNodeLeetcode | null, key: number): TreeNodeLeetcode | null {
    function findMin(node: TreeNodeLeetcode): TreeNodeLeetcode {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    if (root === null) {
        return root;
    }

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    else {
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        const temp = findMin(root.right);

        root.val = temp.val;
        root.right = deleteNode(root.right, temp.val);
    }
    return root;
};