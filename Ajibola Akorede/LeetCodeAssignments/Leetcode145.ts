/*Approach: To solve this problem, we traverse the left subtree in postorder
then traverse the right subtree in postorder then lastly,we visit the root node.*/

class TreeeNode {
    val: number;
    left: TreeeNode | null;
    right: TreeeNode | null;
    constructor(val?: number, left?: TreeeNode | null, right?: TreeeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function postorderTraversal(root: TreeeNode | null): number[] {
    if (!root) {
        return [];
    }

    const result: number[] = [];
    result.push(...postorderTraversal(root.right)); // Traverse the right subtree
    result.push(...postorderTraversal(root.left)); // Traverse the left subtree
    result.push(root.val); // Visit the root node
    

    return result
};