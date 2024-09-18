///145. Binary Tree Postorder Traversal
function postorderTraversal(root: TreeNode | null, values: number[] = []): number[] {
    if (root) {
        postorderTraversal(root.left, values);
        postorderTraversal(root.right, values);
        values.push(root.val);
    }
    return values;
}