// Implement a binary tree using nodes and queues
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

    insert(value: T) {
        const newNode = new TreeNode<T>(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while (queue.length > 0) {
            const curr = queue.shift();
            if (!curr!.left) {
                curr!.left = newNode;
                return;
            } else if (!curr?.right) {
                curr!.right = newNode;
                return;
            } else {
                queue.push(curr!.left);
                queue.push(curr!.right);
            }
        }
    }

    /** Level order traversal */
    traversal(): T[] {
        if (!this.root) return [];

        const traversal: T[] = [];
        const queue: TreeNode<T>[] = [];
        queue.push(this.root);
        while (queue.length > 0) {
            const curr = queue.shift()!;
            traversal.push(curr.data);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        return traversal;
    }

    display() {
        if (!this.root) return;
        const levels: (TreeNode<T>|undefined)[][] = [[this.root]];
        let proceed = true;
        while (proceed) {
            const lastLevel = levels[levels.length - 1];
            console.log(lastLevel.map(node => node?node.data:'-').join(' '));
            proceed = false;
            const newLevel: (TreeNode<T>|undefined)[] = [];
            for (let node of lastLevel) {
                if (node) {
                    newLevel.push(node.left);
                    newLevel.push(node.right);
                    if (node.left && node.right) proceed = true;
                }
            }
            levels.push(newLevel);
        }
    }
}

const tree = new Tree<number>();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
console.log(tree.traversal());
tree.display();