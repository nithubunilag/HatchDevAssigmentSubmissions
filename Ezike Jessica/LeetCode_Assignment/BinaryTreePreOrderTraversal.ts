function preorderTraversal(root: TreeNode | null): number[] {
    let output = []

    const preorder = (root, output) => {
        if(root == null) {
            return output
        }
        else {
            output.push(root.val)
            preorder(root.left, output)
            preorder(root.right, output)
        }
    }
    preorder(root, output)
    return output
};