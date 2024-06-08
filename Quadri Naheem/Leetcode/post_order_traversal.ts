function postorderTraversalLeetcode(root: TreeNodeLeetcode | null): number[] {
    const result: number[] = [];
    
    function traverse(node: TreeNodeLeetcode | null): void {
        if (node === null) {
            return;
        }
        
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }
    
    traverse(root);
    return result;  
};