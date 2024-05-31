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
    preOrder(node: treeNode<T> | null){
        const result: T[] = []

        // if(!this.root) return result
        // result.push(this.root.value)

        // let current = this.root

        function traverse(node: treeNode<T> | null) {
            if (node === null) return
            result.push(node.value)
            traverse(node.left)
            traverse(node.right)
        }
        traverse(this.root)
        return result
    }
    // preOrder(){
    //         const result: T[] = []
    
    //         if(!this.root) return result
    //         result.push(this.root.value)
    
    //         let current = this.root
    
    //         function left(){
    //             if(this.root.left) result.push(this.root.left)
    //                 left()
    //         }
    //         function right(){
    //             if(this.root.right) result.push(this.root.right)
    //                 right()
    //         }
    //         left
    //         right
    //     }
    inOrder(node: treeNode<T> | null){
        const result: T[] = []

        function traverse(node: treeNode<T> | null ){
            if(node === null) return
            traverse(node.left)
            result.push(node.value)
            traverse(node.right)
        }
        traverse
        return result
    }

    postOrder(node: treeNode<T> | null){
        const result: T[] = []

        function traverse(node: treeNode<T> | null){
            if(node === null) return
            traverse(node.left)
            traverse(node.right)
            result.push(node.value)
        }
        traverse
        return result

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