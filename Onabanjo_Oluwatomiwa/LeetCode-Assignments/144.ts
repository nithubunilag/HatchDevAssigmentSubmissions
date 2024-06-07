function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];

    if (root === null) {
        return result;
    }

    let stack: TreeNode[] = [root];

    while(stack.length > 0){
        let current = stack.pop()!;
        result.push(current.val!);

        if(current.right != null){
            stack.push(current.right);
        }
        if(current.left != null){
            stack.push(current.left)
        }
    }
    return result;
};