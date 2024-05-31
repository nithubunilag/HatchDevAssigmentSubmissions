class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value: number) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: TreeNode | null;
    constructor() {
        this.root = null;
    }

    private insertNode(currentNode: TreeNode, value: number): void {
        if (value < currentNode.val) {
            if (currentNode.left === null) {
                currentNode.left = new TreeNode(value);
            } else {
                this.insertNode(currentNode.left, value);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = new TreeNode(value);
            } else {
                this.insertNode(currentNode.right, value);
            }
        }
    }

    insert(value: number): void {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this.insertNode(this.root, value);
        }
    }
}