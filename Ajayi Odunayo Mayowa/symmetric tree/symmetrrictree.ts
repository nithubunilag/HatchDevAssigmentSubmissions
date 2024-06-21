function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return false;
    
    let p = root.left;
    let q = root.right;
    
    const stackP: TreeNode[] = [];
    const stackQ: TreeNode[] = [];
    
    while (!(stackP.length === 0 && stackQ.length === 0 && p === null && q === null)) {
        if (p !== null && q !== null) {
            if (p.val !== q.val) return false;
            
            stackP.push(p);
            stackQ.push(q);
            
            p = p.left;
            q = q.right;
            
            continue
        } else if (p !== null || q !== null) {
            return false;
        }
        
        p = stackP.pop().right;
        q = stackQ.pop().left;
    }
    
    return true;
};
