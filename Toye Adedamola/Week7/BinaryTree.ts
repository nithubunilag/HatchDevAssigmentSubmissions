class BinaryTreeNode<T> {
    data: T;
    left_node: BinaryTreeNode<T> | null;
    right_node: BinaryTreeNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left_node = null;
        this.right_node = null;
    }
}

class BinaryTree2<T> {
    root: BinaryTreeNode<T> | null = null;

    insert(val: T): void {
        const newNode = new BinaryTreeNode(val);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        const queue: BinaryTreeNode<T>[] = [this.root];

        while (queue.length > 0) {
            current = queue.shift()!;

            if (!current.left_node) {
                current.left_node = newNode;
                break;
            } else {
                queue.push(current.left_node);
            }

            if (!current.right_node) {
                current.right_node = newNode;
                break;
            } else {
                queue.push(current.right_node);
            }
        }
    }

    // BREADTH FIRST SEARCH
    levelOrderTraversal(): T[] {
        if (!this.root) {
            return [];
        }
        let queue: BinaryTreeNode<T>[] = [this.root];
        let traversedArray: T[] = [];
        while (queue.length > 0) {
            let current: BinaryTreeNode<T> | undefined = queue.shift();
            if (current!.left_node) {
                queue.push(current!.left_node);
            }
            if (current?.right_node) {
                queue.push(current.right_node);
            }
            traversedArray.push(current!.data);
        }
        return traversedArray;
    }

    dfsPreOrderTraversal(node: BinaryTreeNode<T> | null): T[] {
        if (!node) {
            return [];
        }
        const output: T[] = [];
        output.push(node!.data);
        output.push(...this.dfsPreOrderTraversal(node!.left_node));
        output.push(...this.dfsPreOrderTraversal(node!.right_node));
        return output;
    }

    dfsPreOrderTraversalWithStack(): T[] {
        if (!this.root) {
            return [];
        }

        const stack: BinaryTreeNode<T>[] = [this.root];
        const output: T[] = [];

        while (stack.length > 0) {
            const current = stack.pop()!;
            output.push(current.data);

            // Push right first so it is processed after the left
            if (current.right_node) {
                stack.push(current.right_node);
            }

            if (current.left_node) {
                stack.push(current.left_node);
            }
        }
        return output;
    }

    dfsInOrderTraversal(node: BinaryTreeNode<T> | null): T[] {
        if (!node) {
            return [];
        }
        const output: T[] = [];
        output.push(...this.dfsInOrderTraversal(node.left_node));
        output.push(node.data);
        output.push(...this.dfsInOrderTraversal(node.right_node));
        return output;
    }

    dfsInOrderTraversal2(): T[] {
        if (!this.root) {
            return [];
        }
        const stack: BinaryTreeNode<T>[] = [];
        const output: T[] = [];
        let current: BinaryTreeNode<T> | null = this.root;
        let lastVisited: BinaryTreeNode<T> | null = null;

        while (stack.length > 0 || current) {
            while (current) {
                stack.push(current);
                current = current.left_node;
            }
            current = stack[stack.length - 1];

            if (!current.right_node || current.right_node === lastVisited) {
                stack.pop();
                output.push(current.data);
                lastVisited = current;
                current = null;
            } else {
                current = current.right_node;
            }
        }
        return output;
    }

    dfsPostOrderTraversal(node: BinaryTreeNode<T> | null): T[] {
        if (!node) {
            return [];
        }
        const output: T[] = [];
        output.push(...this.dfsPostOrderTraversal(node.left_node));
        output.push(...this.dfsPostOrderTraversal(node.right_node));
        output.push(node.data);
        return output;
    }

    delete(data: T): void {
        this.root = this.deleteNode(data, this.root);
    }

    // DELETING NODE/ PARENT FROM THE MIN AT RIGHT
    findMinNode(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
        if (!node.left_node) {
            return node;
        }
        return this.findMinNode(node.left_node);
    }

    // IF USING LEFT
    findMaxNode(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
        if (!node.right_node) {
            return node;
        }
        return this.findMaxNode(node.right_node);
    }

    private deleteNode(data: T, node: BinaryTreeNode<T> | null): BinaryTreeNode<T> | null {
        if (!node) {
            return null;
        }
        if (data < node.data) {
            node.left_node = this.deleteNode(data, node.left_node);
            return node;
        } else if (data > node.data) {
            node.right_node = this.deleteNode(data, node.right_node);
            return node;
        } else {
            if (!node.left_node && !node.right_node) {
                node = null;
                return node;
            } else if (node.left_node === null) {
                node = node.right_node!;
                return node;
            } else if (node.right_node === null) {
                node = node.left_node;
                return node;
            }
            const minNode = this.findMinNode(node.right_node);
            node.data = minNode.data;

            node.right_node = this.deleteNode(minNode.data, node.right_node);
            return node;
        }
    }
}

// Example usage:
const myBinaryTree = new BinaryTree2<number>();
myBinaryTree.insert(1);
myBinaryTree.insert(2);
myBinaryTree.insert(3);
myBinaryTree.insert(4);
myBinaryTree.insert(5);

console.log("Level Order Traversal");
console.log(myBinaryTree.levelOrderTraversal());

console.log("Pre order traversal");
console.log(myBinaryTree.dfsPreOrderTraversalWithStack());

console.log("Post order traversal");
console.log(myBinaryTree.dfsPostOrderTraversal(myBinaryTree.root));

console.log("In order traversal");
console.log(myBinaryTree.dfsInOrderTraversal2());
