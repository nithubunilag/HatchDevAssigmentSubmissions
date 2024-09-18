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

    insert(value: T) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    bfstraverse() {
        const queue: TreeNode<T>[] = [];
        const result: T[] = [];
        if (!this.root) return result;

        queue.push(this.root);
        while (queue.length) {
            const current = queue.shift()!; //The exclamation at the end of queue.shift()! tells TypeScript that we know that queue.shift() will never return undefined, so it should not complain about it.
            result.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return result;
    }

    preOrder(node: TreeNode<T> | null): T[] {
        if (!node) return [];

        let output: T[] = [];
        output.push(node.value);
        output.push(...this.preOrder(node.left));
        output.push(...this.preOrder(node.right));

        return output;
    }

    inOrder(node: TreeNode<T> | null): T[] {
        if (!node) return [];

        let output: T[] = [];
        output.push(...this.inOrder(node.left));
        output.push(node.value);
        output.push(...this.inOrder(node.right));

        return output;
    }

    postOrder(node: TreeNode<T> | null): T[] {
        if (!node) return [];

        let output: T[] = [];
        output.push(...this.postOrder(node.left));
        output.push(...this.postOrder(node.right));
        output.push(node.value);

        return output;
    }

    find(value: T) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log("BFS traversal:", tree.bfstraverse());
console.log("Pre-order traversal:", tree.preOrder(tree.root));
console.log("In-order traversal:", tree.inOrder(tree.root));
console.log("Post-order traversal:", tree.postOrder(tree.root));
