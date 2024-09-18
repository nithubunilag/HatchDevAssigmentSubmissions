////94. Binary Tree Inorder Traversal
function inorderTraversal(root: TreeNode | null, value:Array<number>=[]): number[] {
    if(root) {
    inorderTraversal(root.left, value);
    value.push(root.val)
    inorderTraversal(root.right, value);
    }
    return value
};

