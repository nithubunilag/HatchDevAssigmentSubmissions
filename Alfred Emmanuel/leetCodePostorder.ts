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

function postorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }

    const stack: TreeNode[] = [];
    const output: number[] = [];
    let lastVisitedNode: TreeNode | null = null;

    while (stack.length > 0 || root !== null) {
        if (root !== null) {
            stack.push(root);
            root = root.left;
        } else {
            const peekNode = stack[stack.length - 1];
            if (peekNode.right !== null && lastVisitedNode !== peekNode.right) {
                root = peekNode.right;
            } else {
                output.push(peekNode.val);
                lastVisitedNode = stack.pop()!;
            }
        }
    }

    return output;
}
