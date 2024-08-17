class TreeNode<T>{
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T>{
    root: TreeNode<T> | null;

    constructor(){
        this.root = null;
    }

    insert(value: T){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
            return;
        }

        let queue: TreeNode<T>[] = [];
        queue.push(this.root)

        while(queue.length > 0){
            let curr = queue.shift();
            if(curr!.left === null){
                curr!.left = newNode;
                return;
            }else if(curr!.right === null){
                curr!.right = newNode;
                return;
            }else{
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
            if (curr!.value === value) {
                return curr!;
            }
            if (curr!.left) {
                queue.push(curr!.left);
            }
            if (curr!.right) {
                queue.push(curr!.right);
            }
        }
        return null;
    }

    traverse(): T[] {
        if (!this.root) return [];

        let result: T[] = [];
        let queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let curr = queue.shift();
            if (curr) {
                result.push(curr.value);
                if (curr.left) {
                    queue.push(curr.left);
                }
                if (curr.right) {
                    queue.push(curr.right);
                }
            }
        }
        return result;
    }
}

const binaryTree = new BinaryTree<number>();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

const searchedNode = binaryTree.search(5);
console.log(searchedNode);
const traversalResult = binaryTree.traverse();
console.log(traversalResult);
