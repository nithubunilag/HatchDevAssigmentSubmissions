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
    
    traverse() {
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
}



const tree = new binaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log(tree);
console.log(tree.traverse());