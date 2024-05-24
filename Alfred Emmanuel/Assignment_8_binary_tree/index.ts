class Node<T> {
    data: T;
    leftChild: Node<T> | null;
    rightChild: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinaryTreeStructure<T> {
    rootNode: Node<T> | null;

    constructor() {
        this.rootNode = null;
    }

    add(data: T) {
        const newNode = new Node(data);

        if (!this.rootNode) {
            this.rootNode = newNode;
            return;
        }

        let queue: Node<T>[] = [];
        queue.push(this.rootNode);

        while (queue.length > 0) {
            let current = queue.shift();

            if (current!.leftChild === null) {
                current!.leftChild = newNode;
                return;
            } else if (current!.rightChild === null) {
                current!.rightChild = newNode;
                return;
            } else {
                queue.push(current!.leftChild);
                queue.push(current!.rightChild);
            }
        }
    }

    levelOrderTraversal(): T[] {
        if (!this.rootNode) return [];
        let result: T[] = [];
        let queue: Node<T>[] = [];
        queue.push(this.rootNode);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            result.push(currentNode!.data);

            if (currentNode!.leftChild) queue.push(currentNode!.leftChild);
            if (currentNode!.rightChild) queue.push(currentNode!.rightChild);
        }

        return result;
    }
}

const treeStructure = new BinaryTreeStructure<number>();
treeStructure.add(1);
treeStructure.add(2);
treeStructure.add(3);
treeStructure.add(4);
treeStructure.add(5);

console.log(treeStructure.levelOrderTraversal());
