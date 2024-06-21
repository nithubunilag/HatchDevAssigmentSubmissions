// David Emmanuel
// david3emmanuel@gmail.com


class TreeNode<T> {
    data: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

class Tree<T> {
    root?: TreeNode<T>;

    traversal() {
        if (!this.root) return [];
        
        const queue: TreeNode<T>[] = [this.root];
        const traversal: T[] = [];

        while (queue.length > 0) {
            const node: TreeNode<T> = queue.shift()!;
            traversal.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return traversal;
    }
}

const tree = new Tree<string>();
tree.root = new TreeNode<string>('A');
tree.root.left = new TreeNode<string>('B');
tree.root.right = new TreeNode<string>('C');
tree.root.left.left = new TreeNode<string>('D');
tree.root.left.right = new TreeNode<string>('E');
tree.root.right.left = new TreeNode<string>('F');
tree.root.right.right = new TreeNode<string>('G');
tree.root.left.right.right = new TreeNode<string>('H');

console.log(tree.traversal());