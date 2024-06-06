function postorderTraversal(root: TreeNode | null): number[] {
    let output = []

    const postorder = (root, output) => {
        if(root == null) {
            return output
        }
        else {
            postorder(root.left, output)
            postorder(root.right, output)
            output.push(root.val)
        }
    }

    postorder(root, output)
    return output
};