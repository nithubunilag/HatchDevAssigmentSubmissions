class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    
    const queue: TreeNode[] = [root];
    const traversal: number[][] = [];
    let nextLevelRep: TreeNode | null = root;
    
    while (queue.length > 0) {
        const current = queue.shift()!;
        if (current === nextLevelRep) {
            traversal.push([]);
            nextLevelRep = null;
        }
        traversal[traversal.length - 1].push(current.val);
        if (current.left) {
            queue.push(current.left);
            if (!nextLevelRep) nextLevelRep = current.left;
        }
        if (current.right) {
            queue.push(current.right);
            if (!nextLevelRep) nextLevelRep = current.right;
        }
    }
    
    return traversal;
};