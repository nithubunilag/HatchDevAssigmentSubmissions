//Pre order Traversal  
//Definition for a binary tree node.

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
    const result: number[] = [];

    function traverse(node: TreeNode | null): void {
        if (node === null){
            return;
        }

        result.push(node.val);
        traverse(node.left);
        traverse(node.right)
    }
    traverse(root);
    return result;
    
};