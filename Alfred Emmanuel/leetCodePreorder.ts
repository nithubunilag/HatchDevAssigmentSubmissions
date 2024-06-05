// name: Alfred Emmanuel
// github: Alfred-Emmanuel
// email: ealfred828@gmail.com

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];

    const stack: TreeNode[] = [root];
    const result: number[] = [];

    while (stack.length > 0) {
        const node = stack.pop();
        if (node !== null) {
            result.push(node.val);
            if (node.right !== null) stack.push(node.right);
            if (node.left !== null) stack.push(node.left);
        }
    }

    return result;
};
