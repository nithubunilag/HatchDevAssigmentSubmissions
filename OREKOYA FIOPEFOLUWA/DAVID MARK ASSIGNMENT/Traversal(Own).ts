// name:Orekoya Fiopefoluwa
// email: fiopefoluuwaorekoya@gmail.com

class TreeNodeOwn<T> {
    value: T;
    left: TreeNodeOwn<T> 
    right: TreeNodeOwn<T>

    constructor(value: T) {
        this.value = value;
    }
}

class BinaryTreeTraverse<T> { //this will take care of the tree with the insert and traverse method
    
    root: TreeNodeOwn<T> 

    insert(value: T){ //add values to the trees
        const newNode = new TreeNodeOwn(value);
        if (!this.root) {
            this.root = newNode;
        } 
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node: TreeNodeOwn<T>, newNode: TreeNodeOwn<T>){
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } 
            else {
                this.insertNode(node.left, newNode);
            }
        } 
        else if (newNode.value > node.value) {
            if (!node.right) {
                node.right = newNode;
            } 
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    // mthe dfferent methods of traversing a tree
    preorderTraverse(node: TreeNodeOwn<T>, result: T[] = []): T[] {
        if (node) {
            result.push(node.value);
            this.preorderTraverse(node.left, result);
            this.preorderTraverse(node.right, result);
        }
        return result;
    }

    inorderTraverse(node: TreeNodeOwn<T>, result: T[] = []): T[] {
        if (node) {
            this.inorderTraverse(node.left, result);
            result.push(node.value);
            this.inorderTraverse(node.right, result);
        }
        return result;
    }

    postorderTraverse(node: TreeNodeOwn<T>, result: T[] = []): T[] {
        if (node) {
            this.postorderTraverse(node.left, result);
            this.postorderTraverse(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    levelOrderTraverse(): T[] {
        const result: T[] = [];
        const queue: TreeNodeOwn<T>[] = [];
        if (this.root) {
            queue.push(this.root);
        }
        while (queue.length > 0) {
            const node = queue.shift()!;
            result.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return result;
    }
}


const tree = new BinaryTreeTraverse<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log(tree.preorderTraverse(tree.root)); // ouput will be[10, 5, 15]
console.log(tree.inorderTraverse(tree.root));  // output will be[5, 10, 15]
console.log(tree.postorderTraverse(tree.root)); // output will be[5, 15, 10]
console.log(tree.levelOrderTraverse()); //output will be [10, 5, 15]
