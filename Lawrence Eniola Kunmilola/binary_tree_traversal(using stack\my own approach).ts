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

class BinaryTreeTraversal<T> {
    root: TreeNode<T> | null;

    constructor(root: TreeNode<T> | null = null) {
        this.root = root;
    }

    preOrder(): T[] {
        if (!this.root) return [];

        const stack: TreeNode<T>[] = [this.root];
        const result: T[] = [];

        while (stack.length > 0) {
            const node = stack.pop()!;
            result.push(node.value);

            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }

        return result;
    }

    inOrder(): T[] {
        const stack: TreeNode<T>[] = [];
        const result: T[] = [];
        let current = this.root;

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

    postOrder(): T[] {
        if (!this.root) return [];

        const stack1: TreeNode<T>[] = [this.root];
        const stack2: TreeNode<T>[] = [];
        const result: T[] = [];

        while (stack1.length > 0) {
            const node = stack1.pop()!;
            stack2.push(node);

            if (node.left) stack1.push(node.left);
            if (node.right) stack1.push(node.right);
        }

        while (stack2.length > 0) {
            const node = stack2.pop()!;
            result.push(node.value);
        }

        return result;
    }
}

const root = new TreeNode<number>(10);
root.left = new TreeNode<number>(5);
root.right = new TreeNode<number>(15);
root.left.left = new TreeNode<number>(3);
root.left.right = new TreeNode<number>(7);
root.right.left = new TreeNode<number>(12);
root.right.right = new TreeNode<number>(18);

const traversal = new BinaryTreeTraversal<number>(root);

console.log("Pre-order traversal:", traversal.preOrder());
console.log("In-order traversal:", traversal.inOrder());
console.log("Post-order traversal:", traversal.postOrder());
