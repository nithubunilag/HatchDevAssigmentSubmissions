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

    function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
        return null; // If the tree is empty, return null
    }

    // If the key to be deleted is less than the root's key,
    // then it lies in the left subtree
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } 
    // If the key to be deleted is greater than the root's key,
    // then it lies in the right subtree
    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } 
    // If key is the same as root's key, then this is the node to be deleted
    else {
        // Node with only one child or no child
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        // Node with two children: Get the inorder successor (smallest in the right subtree)
        root.val = minValue(root.right);

        // Delete the inorder successor
        root.right = deleteNode(root.right, root.val);
    }
    return root;
}

function minValue(root: TreeNode | null): number {
    let min = root!.val;
    while (root!.left !== null) {
        min = root!.left.val;
        root = root!.left;
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
