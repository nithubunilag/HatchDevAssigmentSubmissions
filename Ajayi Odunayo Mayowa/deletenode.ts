//name: Ajayi Odunayo Mayowa
//email:odunayoajayi2004@gmail.com
//github: odunayo222
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode, newNode: TreeNode): void {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    delete(value: number): void {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(root: TreeNode | null, value: number): TreeNode | null {
        if (!root) {
            return null;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Case 1: No child or only one child
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            // Case 2: Node with two children
            root.value = this.minValue(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }

        return root;
    }

    private minValue(node: TreeNode): number {
        let min = node.value;
        while (node.left) {
            min = node.left.value;
            node = node.left;
        }
        return min;
    }

    // Utility function to print the BST inorder
    inorder(): void {
        this.inorderTraversal(this.root);
    }

    private inorderTraversal(node: TreeNode | null): void {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }
}

// Example usage:
const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(2);
bst.insert(4);
bst.insert(7);
bst.insert(9);

console.log("Before deletion:");
bst.inorder(); // Output: 2, 3, 4, 5, 7, 8, 9

bst.delete(5);

console.log("After deletion:");
bst.inorder(); // Output: 2, 3, 4, 7, 8, 9
