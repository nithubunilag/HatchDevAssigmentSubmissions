class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // In-order Traversal (Left, Root, Right)
    inOrderTraversal(node: TreeNode | null): void {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        }
    }

    // Pre-order Traversal (Root, Left, Right)
    preOrderTraversal(node: TreeNode | null): void {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Post-order Traversal (Left, Right, Root)
    postOrderTraversal(node: TreeNode | null): void {
        if (node) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.data);
        }
    }

    // Level-order Traversal (Breadth-First)
    levelOrderTraversal(): void {
        if (!this.root) return;

        const queue: (TreeNode | null)[] = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();
            if (node) {
                console.log(node.data);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
    }
}
class TreeNode {
    data: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: any) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


// Example usage:
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

console.log("In-order Traversal:");
tree.inOrderTraversal(tree.root);  // Output: 4 2 5 1 6 3 7

console.log("Pre-order Traversal:");
tree.preOrderTraversal(tree.root);  // Output: 1 2 4 5 3 6 7

console.log("Post-order Traversal:");
tree.postOrderTraversal(tree.root);  // Output: 4 5 2 6 7 3 1

console.log("Level-order Traversal:");
tree.levelOrderTraversal();  // Output: 1 2 3 4 5 6 7
