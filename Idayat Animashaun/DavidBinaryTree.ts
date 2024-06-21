class treeNode<T> {
    value: T;
    left: treeNode<T> | null;
    right: treeNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binaryTree<T> {
    root: treeNode<T> | null;
    constructor() {
        this.root = null;
    }

    insert(value: T) {
        const newNode = new treeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) { // The while loop is passed in true, it will not run forever because we have return statements inside the loop that will break the loop.
            if (value === current.value) return undefined;
            if (!current.left) {
                current.left = newNode;
                return this;
            }
            current = current.left;

            if (!current.right) {
                current.right = newNode;
                return this;
            }
            current = current.right;
        }
    }

    // traverse() {
    //     const result: T[] = [];
    //     function traverse(node: treeNode<T> | null) {
    //         if (node) {
    //             result.push(node.value);
    //             traverse(node.left);
    //             traverse(node.right);
    //         }
    //     }
    //     traverse(this.root);
    //     return result;
    // }
    
    bfstraverse() {
        const queue: treeNode<T>[] = [];
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

    preOrder(node: treeNode<T> | null): T[] {
        if (!node) return [];
    
        let output: T[] = [];
    
        output.push(node.value);
        output.push(...this.preOrder(node.left));
        output.push(...this.preOrder(node.right));
    
        return output;
    }
    // Post-order traversal: Left -> Right -> Root
    postOrder(node: treeNode<T> | null): T[] {
        if (!node) return [];

        let output: T[] = [];

        output.push(...this.postOrder(node.left));
        output.push(...this.postOrder(node.right));
        output.push(node.value);

        return output;
    }

    
    inOrder(node: treeNode<T> | null): T[] {
        if (!node) return [];
    
        let output: T[] = [];
    
        output.push(...this.inOrder(node!.left));
        output.push(node?.value!);
        output.push(...this.inOrder(node!.right));
    
        return output;
    }

    find(value: T) {
        if (!this.root) return false;
        let current = this.root;
        while (true) {
            if (value === current.value) return true;
            if (value < current.value) {
                if (!current.left) return false;
                current = current.left;
            } else {
                if (!current.right) return false;
                current = current.right;
            }
        }
    }
}



const tree = new binaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log(tree);
console.log(tree.bfstraverse());
console.log(tree.postOrder(tree.root));
console.log(tree.preOrder(tree.root));  
console.log(tree.inOrder(tree.root));  