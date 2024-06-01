function postorderTraversal(root: TreeNode | null): number[] {
    const arr: number[] = [];

    let output = (root)=>{

        if(root == null)
        return [];

        output(root.left)
        output(root.right)
        arr.push(root.val)

    }

    output(root)

    return arr;
};
