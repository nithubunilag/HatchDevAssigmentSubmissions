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
    deleteNode(root: TreeNode | null, key: number): TreeNode | null {
         // Base case: Empty tree
        if (root === null) {
            return null;
        }

        // Search for the node to delete
        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else {

        // Case 1: Node has no children (leaf node)
        if (root.left === null && root.right === null) {
        return null;
        } else if (root.left === null) {
        // Case 2: Node has only right child
        return root.right;
        } else if (root.right === null) {
        // Case 3: Node has only left child
        return root.left;
        } else {
        // Case 4: Node has two children
        // Find the in-order successor (smallest node in right subtree)
        let successor = root.right;
        while (successor.left !== null) {
            successor = successor.left;
        }

        // Replace current node's value with successor's value
        root.val = successor.val;
        root.right = this.deleteNode(root.right, successor.val);
        }
    }

  return root;
    }
}