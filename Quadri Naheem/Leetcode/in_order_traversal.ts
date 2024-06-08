function inorderTraversalLeetcode(root: TreeNodeLeetcode | null): number[] {
    const result: number[] = [];
    
    function traverse(node: TreeNodeLeetcode | null): void {
        if (node === null) {
            return;
        }
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    return result;
}
