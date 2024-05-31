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

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    
    const out: number[] = [];
    if (root.left) out.push(...postorderTraversal(root.left));
    if (root.right) out.push(...postorderTraversal(root.right));
    out.push(root.val);
    return out;
};