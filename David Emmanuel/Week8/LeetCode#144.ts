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

function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    
    const out: number[] = [root.val];
    if (root.left) out.push(...preorderTraversal(root.left));
    if (root.right) out.push(...preorderTraversal(root.right));
    return out;
};