//using a depth first search approach to solve this question as  we visit the current node before the child nodes. This means we process the root node first, then  process the left subtree, followed by the right subtree. 

class TreesNode {
    val: number;
    left: TreesNode | null;
    right: TreesNode | null;
    constructor(val?: number, left?: TreesNode | null, right?: TreesNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function preorderTraversal(root: TreesNode | null): number[] {
    if (!root) {
        return [];
    }

    const result: number[] = [];
    result.push(root.val); // Visit the root node
    result.push(...preorderTraversal(root.left)); // Traverse the left subtree
    result.push(...preorderTraversal(root.right)); // Traverse the right subtree

    return result;
}
