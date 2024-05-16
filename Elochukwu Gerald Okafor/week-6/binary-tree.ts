type BinaryNode<T> = BinaryTreeNode<T> | null;

// Binary tree node
class BinaryTreeNode<T> {
    public value: T;
    public leftChild: BinaryNode<T>;
    public rightChild: BinaryNode<T>;

    // Initialize the node with some data
    constructor(val: T) {
        this.value = val;
        this.leftChild = null;
        this.rightChild = null;
    }

    // Set the left child
    public setLeftChild(node: BinaryNode<T>) {
        this.leftChild = node;
    }

    // Set the right child
    public setRightChild(node: BinaryNode<T>) {
        this.rightChild = node;
    }
}

class BinaryTree<T> {
    public rootNode: BinaryNode<T>;
    public size: number;
    private treeQueue: BinaryNode<T>[];

    // Initialize the binary tree with some data
    constructor(initialValues: T[]) {
        if (initialValues.length > 0) {
            this.size = initialValues.length;
            this.rootNode = new BinaryTreeNode(initialValues[0]);

            this.treeQueue = [this.rootNode];
            let idx = 1;

            while (idx < initialValues.length) {
                let currNode = this.treeQueue.shift();

                if (currNode) {
                    const leftVal = initialValues[idx++];

                    if (leftVal) {
                        const newNode = new BinaryTreeNode(leftVal);
                        currNode.setLeftChild(newNode);
                        this.treeQueue.push(currNode.leftChild);
                    }

                    if (idx < initialValues.length) {
                        const rightVal = initialValues[idx++];
                        if (rightVal) {
                            const newNode = new BinaryTreeNode(rightVal);
                            currNode.setRightChild(newNode);
                            this.treeQueue.push(currNode.rightChild);
                        }
                    }
                }
            }

            // console.log(treeQueue); only the bottom most nodes are left
        }
    }

    // Inserting to a tree
    public insert(val: T): void {
        const newNode = new BinaryTreeNode(val);

        // If the tree is empty
        if (this.rootNode == null) {
            this.rootNode = newNode;
            this.treeQueue = [newNode];
            this.size += 1;

            return;
        }

        // Start from the root node
        this.treeQueue = [this.rootNode];

        while (this.treeQueue.length > 0) {
            let currNode = this.treeQueue.shift();

            if (currNode) {
                // If there isn't a left child, add this node to the left
                if (currNode.leftChild == null) {
                    currNode.setLeftChild(newNode);
                    this.size += 1;
                    return;
                }

                // If there isn't a right child, add this node to the right
                if (currNode.rightChild == null) {
                    currNode.setRightChild(newNode);
                    this.size += 1;
                    return;
                }

                // Push both children
                this.treeQueue.push(currNode.leftChild);
                this.treeQueue.push(currNode.rightChild);
            }
        }
    }

    // Searches the tree for the index of a node if present, -1 by default
    public search(key: T): number {
        this.treeQueue = [this.rootNode];
        let idx = 0;

        while (this.treeQueue.length > 0) {
            let currNode = this.treeQueue.shift();

            if (currNode) {
                if (currNode.value == key) return idx;

                // Continue searching each branch
                this.treeQueue.push(currNode.leftChild);
                this.treeQueue.push(currNode.rightChild);

                idx += 1;
            }
        }

        return -1;
    }

    // Traversing the tree
    public traverse(): void {
        if (this.rootNode) {
            this.treeQueue = [this.rootNode];

            let idx = 1;

            while (this.treeQueue.length > 0) {
                let currNode = this.treeQueue.shift();

                console.log(idx, 'Parent:', currNode?.value);
                console.log(idx, 'Left child:', currNode?.leftChild?.value);
                console.log(
                    idx,
                    'Right child:',
                    currNode?.rightChild?.value,
                    '\n'
                );

                if (currNode?.leftChild)
                    this.treeQueue.push(currNode.leftChild);

                if (currNode?.rightChild)
                    this.treeQueue.push(currNode.rightChild);

                idx += 1;
            }
        }
    }

    // Recursively lists the nodes in a tree-like manner
    public model(
        padding: string = '',
        pointer: string = '',
        node: BinaryNode<T> = this.rootNode,
        builder: string = ''
    ): string {
        // Base case, if there's no node
        if (!node) {
            return builder;
        }

        builder += `${padding} ${pointer} ${node.value} \n`;

        const nextPadding = `${padding} | `;
        const rightPointer = '└──';
        const leftPointer = node.rightChild ? '├──' : '└──';

        // build for left and right children
        builder = this.model(nextPadding, leftPointer, node.leftChild, builder);
        builder = this.model(
            nextPadding,
            rightPointer,
            node.rightChild,
            builder
        );

        return builder;
    }
}

// Testing
const schema = new BinaryTree([
    'this',
    'is',
    'some',
    'binary',
    'tree',
    'implementation',
]);

schema.insert('in ts');
schema.traverse();

const treeModel = schema.model('');
console.log('MODEL:\n', treeModel);
console.log("Index of 'implementation':", schema.search('implementation')); // should return 5
