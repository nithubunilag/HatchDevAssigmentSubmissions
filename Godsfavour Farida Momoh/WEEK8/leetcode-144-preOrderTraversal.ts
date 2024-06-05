function preorderTraversal(root: TreeNode | null): number[] {
    const arr: number[] = [];

    let output = (root)=>{

        if(root == null)
        return [];

        arr.push(root.val)
        output(root.left)
        output(root.right)

    }

    output(root)

    return arr;
};
