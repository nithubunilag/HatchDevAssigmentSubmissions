import { Tree, TreeNode } from './tree.ts';

/** Tree with DFS methods */
class DFSTree<T> extends Tree<T> {
    // Instantiate
    constructor(root: T) {
        super(root);
    }

    /* My Implementation */
    // Pre-order traversal: Parent -> Left -> Right
    public preorder(subtree: TreeNode<T> | undefined, nodes: T[]): T[] {
        if (subtree) {
            nodes.push(subtree.data);
            this.preorder(subtree.left, nodes);
            this.preorder(subtree.right, nodes);
        }
        return nodes;
    }

    // In-order traversal: Left -> Parent -> Right
    public inorder(subtree: TreeNode<T> | undefined, nodes: T[]): T[] {
        if (subtree) {
            this.inorder(subtree.left, nodes); // traverse the left
            nodes.push(subtree.data); // Push the root node
            this.inorder(subtree.right, nodes); // traverse the right
        }
        return nodes;
    }

    // Post-order traversal: Left -> Right -> Parent
    public postorder(subtree: TreeNode<T> | undefined, nodes: T[]): T[] {
        if (subtree) {
            this.postorder(subtree.left, nodes);
            this.postorder(subtree.right, nodes);
            nodes.push(subtree.data);
        }
        return nodes;
    }

    /** Class Implementation */
    // Class Pre Order
    public classPreOrder(node: TreeNode<T> | undefined): T[] {
        if (!node) return [];

        let output: T[] = [];

        output.push(node?.data!);
        output.push(...this.classPreOrder(node!.left));
        output.push(...this.classPreOrder(node!.right));

        return output;
    }

    // Class In Order
    public classInOrder(node: TreeNode<T> | undefined): T[] {
        if (!node) return [];

        let output: T[] = [];

        output.push(...this.classInOrder(node!.left));
        output.push(node?.data!);
        output.push(...this.classInOrder(node!.right));

        return output;
    }

    // Class Post Order
    public classPostOrder(node: TreeNode<T> | undefined): T[] {
        if (!node) return [];

        let output: T[] = [];

        output.push(...this.classPreOrder(node!.left));
        output.push(...this.classPreOrder(node!.right));
        output.push(node?.data!);

        return output;
    }

    // Helper method: Iterate
    public iterate(header: string, nodes: T[]): void {
        let str = `${header} START -> `;
        for (const node of nodes) {
            str += `${node} -> `;
        }
        str += 'END';
        console.log(str);
    }
}

const binaryTree = new DFSTree(1);
const root = binaryTree.root;

// Left
binaryTree.root!.left = new TreeNode(2);
binaryTree.root!.left.left = new TreeNode(4);
binaryTree.root!.left.right = new TreeNode(5);
binaryTree.root!.left.right.left = new TreeNode(12);
binaryTree.root!.left.left.left = new TreeNode(9);
binaryTree.root!.left.left.left.left = new TreeNode(11);

// Right
binaryTree.root!.right = new TreeNode(3);
binaryTree.root!.right.left = new TreeNode(13);
binaryTree.root!.right.right = new TreeNode(14);
binaryTree.root!.right.right.right = new TreeNode(15);

// Testing
const testPreOrder = binaryTree.preorder(root, []);
const testInOrder = binaryTree.inorder(root, []);
const testPostOrder = binaryTree.postorder(root, []);

const testClassPreOrder = binaryTree.classPreOrder(root);
const testClassInOrder = binaryTree.classInOrder(root);
const testClassPostOrder = binaryTree.classPostOrder(root);

console.log('Pre-order:', testPreOrder);
console.log('In-order:', testInOrder);
console.log('Post-order:', testClassPostOrder);

console.log('Pre-order (class):', testClassPreOrder);
console.log('In-order (class):', testClassInOrder);
console.log('Post-order (class):', testClassPostOrder);

// Arrows
binaryTree.iterate("In Order:", testInOrder);
