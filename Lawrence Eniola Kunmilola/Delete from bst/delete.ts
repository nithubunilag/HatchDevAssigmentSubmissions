
/////450. Delete Node in a BST
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        
        let minLargerNode = getMin(root.right);
        root.val = minLargerNode.val;
        root.right = deleteNode(root.right, minLargerNode.val);
    }
    return root;
}

function getMin(node: TreeNode): TreeNode {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}
