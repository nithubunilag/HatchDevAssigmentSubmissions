/** Tree Node Class */
class TreeNode<T> {
    public data: T;
    public left?: TreeNode<T>;
    public right?: TreeNode<T>;

    // Initialize with some data
    constructor(data: T) {
        this.data = data;
    }
}

/** Tree Class */
class Tree<T> {
    public root?: TreeNode<T>;

    constructor(root: T) {
        this.root = new TreeNode(root);
    }

    // Traverses a tree, returns it's children in order
    public traverse(): T[] {
        if (!this.root) return [];

        const treeQueue: TreeNode<T>[] = [this.root];
        const leafs: T[] = [];

        // While there's still nodes to consider
        while (treeQueue.length != 0) {
            const newLeaf: TreeNode<T> = treeQueue.shift()!;
            // Push the data
            leafs.push(newLeaf.data);
            // Add the left and right children if present
            if (newLeaf.left) treeQueue.push(newLeaf.left);
            if (newLeaf.right) treeQueue.push(newLeaf.right);
        }

        return leafs;
    }
}

const binaryTree = new Tree("root");

binaryTree.root!.left = new TreeNode("first left");
binaryTree.root!.right = new TreeNode("first right");

const nodes = binaryTree.traverse();
console.log(nodes);
