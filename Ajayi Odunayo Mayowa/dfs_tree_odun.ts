//name: Ajayi Odunayo Mayowa
//github: Odunayo222

class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value: T) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Iterative Preorder traversal
    preorderTraversal(): T[] {
        const result: T[] = [];
        if (this.root === null) return result;

        const stack: TreeNode<T>[] = [this.root];

        while (stack.length > 0) {
            const node = stack.pop()!;
            result.push(node.value);

            if (node.right !== null) {
                stack.push(node.right);
            }
            if (node.left !== null) {
                stack.push(node.left);
            }
        }

        return result;
    }

    // Iterative Inorder traversal
    inorderTraversal(): T[] {
        const result: T[] = [];
        const stack: TreeNode<T>[] = [];
        let current: TreeNode<T> | null = this.root;

        while (current !== null || stack.length > 0) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop()!;
            result.push(current.value);
            current = current.right;
        }

        return result;
    }

    // Iterative Postorder traversal
    postorderTraversal(): T[] {
        const result: T[] = [];
        if (this.root === null) return result;

        const stack: Array<{ node: TreeNode<T>, visited: boolean }> = [{ node: this.root, visited: false }];

        while (stack.length > 0) {
            const { node, visited } = stack.pop()!;

            if (visited) {
                result.push(node.value);
            } else {
                stack.push({ node, visited: true });
                if (node.right !== null) {
                    stack.push({ node: node.right, visited: false });
                }
                if (node.left !== null) {
                    stack.push({ node: node.left, visited: false });
                }
            }
        }

        return result;
    }
}

// Usage example
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(18);

console.log("Preorder Traversal: ", tree.preorderTraversal());
console.log("Inorder Traversal: ", tree.inorderTraversal());
console.log("Postorder Traversal: ", tree.postorderTraversal());
