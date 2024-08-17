class BinaryTreeArray {
    private size: number;
    tree: (number | null)[];

    constructor(size: number) {
        this.size = size;
        this.tree = new Array(size).fill(null);
    }

    parent(index: number): number | null {
        if (index === 0) {
            return null; // Root has no parent
        }
        return Math.floor((index - 1) / 2);
    }

    leftChild(index: number): number | null {
        const leftIndex = 2 * index + 1;
        if (leftIndex < this.size) {
            return leftIndex;
        }
        return null;
    }

    rightChild(index: number): number | null {
        const rightIndex = 2 * index + 2;
        if (rightIndex < this.size) {
            return rightIndex;
        }
        return null;
    }
}


const tree = new BinaryTreeArray(10);
tree.tree = [1, 2, 3, 4, 5, 6, 7, null, null, null];

console.log("Parent of index 3:", tree.parent(3));
console.log("Left child of index 1:", tree.leftChild(1));
console.log("Right child of index 2:", tree.rightChild(2));
