////144. Binary Tree Preorder Traversal
function preorderTraversal(root: TreeNode | null, values=[]): number[] {
    if(root){
        values.push(root.val)
        preorderTraversal(root.left, values)
        preorderTraversal(root.right, values)
    }
    return values
};