class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(value: T) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }
        let queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let curr = queue.shift();

            if (curr!.left === null) {
                curr!.left = newNode;
                return;
            } else if (curr!.right === null) {
                curr!.right = newNode;
                return;
            } else {
                queue.push(curr!.left);
                queue.push(curr!.right);
            }
        }
    }

    search(value: T): TreeNode<T> | null {
        if (!this.root) return null;

        let queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let curr = queue.shift();
            if (curr!.value === value) return curr;

            if (curr!.left) queue.push(curr!.left);
            if (curr!.right) queue.push(curr!.right);
        }

        return null;
    }

    inorderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
        if (node) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }
}


class BinaryTreeArray<T> {
    treeArray: (T | null)[];

    constructor() {
        this.treeArray = [null]; 
    } 

    insert(value: T) {
        if (this.treeArray.length === 1) {
            this.treeArray.push(value);
        } else {
            let i = 1;
            while (true) {
                if (!this.treeArray[i]) {
                    this.treeArray[i] = value; 
                    break;
                }
                i++;
            }
        }
    }

    search(value: T): boolean {
        return this.treeArray.includes(value);
    }

    inorderTraversal(index: number = 1, result: T[] = []): T[] {
        if (index < this.treeArray.length) {
            if (this.treeArray[index * 2]) { 
                this.inorderTraversal(index * 2, result);
            }
            if (this.treeArray[index]) { 
                result.push(this.treeArray[index]);
            }
            if (this.treeArray[index * 2 + 1]) { 
                this.inorderTraversal(index * 2 + 1, result);
            }
        }
        return result;
    }
}


    inorderTraversal(): T[] {
        return this.treeArray.filter(node => node !== null) as T[];
    }
}

