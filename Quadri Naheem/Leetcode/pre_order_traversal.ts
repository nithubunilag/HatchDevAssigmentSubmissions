function preorderTraversalLeetcode(root: TreeNodeLeetcode | null): number[] {
    const result: number[] = [];
    
    function traverse(node: TreeNodeLeetcode | null): void {
        if (node === null) {
            return;
        }
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    
    traverse(root);
    return result;  
};