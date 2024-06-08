class TreeesNode {
    val: number;
    left: TreeesNode | null;
    right: TreeesNode | null;
    constructor(val?: number, left?: TreeesNode | null, right?: TreeesNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function inorderTraversal(root: TreeesNode | null): number[] {
    if (!root) {
        return [];
    }

    const result: number[] = [];
    result.push(...inorderTraversal(root.left)); // Traverse the left subtree
    result.push(root.val); // Visit the root node
    result.push(...inorderTraversal(root.right)); // Traverse the right subtree

    return result;
}
