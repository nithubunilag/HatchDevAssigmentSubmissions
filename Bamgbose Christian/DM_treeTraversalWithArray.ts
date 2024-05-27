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