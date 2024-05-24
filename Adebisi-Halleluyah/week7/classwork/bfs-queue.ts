class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(key: number) {
        this.value = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(key: number): void {
        if (this.root === null) {
            this.root = new TreeNode(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    insertNode(node: TreeNode, key: number): void {
        if (key < node?.value) {
            if (node.left === null) {
                node.left = new TreeNode(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }
}

class BstWithQueue extends BinarySearchTree {
    levelOrderTraversal(): void {
        if (this.root === null) {
            return;
        }

        const queue: (TreeNode | null)[] = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();
            if (node !== undefined && node !== null) {
                console.log(node.value);
                
                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
        }
    }
}


const bst = new BstWithQueue();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
bst.insert(45);
bst.insert(16);
bst.insert(81);


bst.levelOrderTraversal();
