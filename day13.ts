class TreeNode {
    data: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: any) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }
    Traversal(): void {
        if (this.root === null) {
            console.log("(empty)");
            return;
        }

        const queue: (TreeNode | null)[] = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current!.data);

            if (current!.left !== null) {
                queue.push(current!.left);
            }

            if (current!.right !== null) {
                queue.push(current!.right);
            }
        }
    }
}

const tree = new BinaryTree();


console.log("level");
tree.Traversal();
