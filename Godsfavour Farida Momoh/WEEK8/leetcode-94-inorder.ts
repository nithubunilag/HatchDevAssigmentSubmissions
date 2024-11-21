
function inorderTraversal(root: TreeNode | null): number[] {
    const arr: number[] = [];

    let output = (root)=>{

        if(root == null)
        return [];

        output(root.left)
        arr.push(root.val)
        output(root.right)

    }

    output(root)

    return arr;
};
