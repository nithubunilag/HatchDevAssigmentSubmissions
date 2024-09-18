class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root: TreeNode | null): void {
    if (!root) {
        return;
    }

    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (currentNode) {
            console.log(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);


levelOrderTraversal(root);
