/* Name: Bamgbose Christian 
   Email: bamgbosechristian@gmail.com
   github username: C-J7
   github Address: http://github.com/C-J7
   Assignment: Tree Traversal with an Array
*/

class TreeNode {
    value: number;
    left: TreeNode | null; //the left child node
    right: TreeNode | null; //the right child node

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Inserting a new node with the given value into the binary tree
    insert(value: number): void {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    //function to recursively insert a new node into the binary tree
    private insertNode(node: TreeNode, newNode: TreeNode): void {
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

    // Performing an in-order traversal of the binary tree and return the values in an array
    traverseInOrder(): number[] {
        const result: number[] = [];
        this.inOrder(this.root, result);
        return result;
    }

    //Another function to recursively perform in-order traversal of the binary tree
    private inOrder(node: TreeNode | null, result: number[]): void {
        if (node !== null) {
            this.inOrder(node.left, result); //the left subtree
            result.push(node.value); //the current node
            this.inOrder(node.right, result); //the right subtree
        }
    }

    // Deleting a node from the binary tree
    deleteNode(value: number): void {
        this.root = this.deleteNodeRecursive(this.root, value);
    }

    // Recursive function to delete a node from the binary tree
    private deleteNodeRecursive(node: TreeNode | null, value: number): TreeNode | null {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.deleteNodeRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNodeRecursive(node.right, value);
        } else {
            // Node to be deleted is found

            // Case 1: Node has no children
            if (node.left === null && node.right === null) {
                return null;
            }

            // Case 2: Node has only one child
            if (node.left === null) {
                return node.right;
            }

            if (node.right === null) {
                return node.left;
            }

            // Case 3: Node has two children
            const minValue = this.findMinValue(node.right);
            node.value = minValue;
            node.right = this.deleteNodeRecursive(node.right, minValue);
        }

        return node;
    }

    //function to find the minimum value in a binary tree
    private findMinValue(node: TreeNode): number {
        let minValue = node.value;
        while (node.left !== null) {
            minValue = node.left.value;
            node = node.left;
        }
        return minValue;
    }



}


// An example of my implementation for Binary Tree Traversal
const exampleTree = new BinaryTree();
exampleTree.insert(5);
exampleTree.insert(3);
exampleTree.insert(7);
exampleTree.insert(2);
exampleTree.insert(4);
exampleTree.insert(6);
exampleTree.insert(8);

const result = exampleTree.traverseInOrder();
console.log(result);