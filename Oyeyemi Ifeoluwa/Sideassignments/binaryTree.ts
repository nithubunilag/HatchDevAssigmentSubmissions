class treeNode<T> {
    value: T;
    left: treeNode<T> | null;
    right: treeNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binaryTree<T> {
    root: treeNode<T> | null;
    constructor() {
        this.root = null;
    }

    insert(value: T) {
        const newNode = new treeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) { 
            if (value === current.value) return undefined;
            if (!current.left) {
                current.left = newNode;
                return this;
            }
            current = current.left;

            if (!current.right) {
                current.right = newNode;
                return this;
            }
            current = current.right;
        }
    }
    
    preorder(node: treeNode<T> | null){
        const output : T[] = []

        if(!node) return []
        output.push(node?.value!)
        output.push(...this.preorder(node!.left))
        output.push(...this.preorder(node!.right))

        return output

    }

    inorder(node: treeNode<T> | null){
        const output : T[] = []

        if(!node) return []
        output.push(...this.inorder(node!.left))
        output.push(node?.value!)
        output.push(...this.inorder(node!.right))

        return output
    }
    postorder(node: treeNode<T> | null){
        const output : T[] = []

        if(!node) return []
        output.push(...this.postorder(node!.left))
        output.push(...this.postorder(node!.right))
        output.push(node?.value!)

        return output
    }


    traverse() {
        const queue: treeNode<T>[] = [];
        const result: T[] = [];
        if (!this.root) return result;
        queue.push(this.root);
        while (queue.length) {
            const current = queue.shift()!
            result.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return result;
    }
}



const tree = new binaryTree<number>()
tree.insert(10)
tree.insert(5)
tree.insert(15)

console.log(tree)
console.log(tree.traverse())