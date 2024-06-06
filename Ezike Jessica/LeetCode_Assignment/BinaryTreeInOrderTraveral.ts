function inorderTraversal(root: TreeNode | null): number[] {
    let output = []

    const inorder = (root,output) => {
        if(root == null) {
            return output
        }
        else {
            inorder(root.left, output)
            output.push(root.val)
            inorder(root.right, output)
        }
    }

    
    inorder(root, output)
    return output
};