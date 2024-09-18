////102. Binary Tree Level Order Traversal
function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];
    if (!root) return result;
    
    let queue: TreeNode[] = [root];
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel: number[] = [];
        
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()!;
            currentLevel.push(currentNode.val);
            
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}
