import { Queue } from "./Queue/queue";

class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null;


    constructor(){
        this.root = null;
    }

    insert(value: T){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
        }
        let queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while(queue.length){
            const node = queue.shift();
            if(node!.left === null){
                node!.left = newNode;
                break;
            } else if (node!.right === null){
                node!.right = newNode;
                break;
            } else {
                queue.push(node!.left);
                queue.push(node!.right);
            }
        }

    }
    traverse() {
        let traversedList: T[] = []
        const queue = new Queue<TreeNode<T>>();
        if(this.root){
            queue.enqueue(this.root);
            while(queue.size() > 0) {
                const node = queue.dequeue();
                while(node){
                    traversedList.push(node.value);
                    if(node.left !== null){
                        queue.enqueue(node.left);
                    }
                    if(node.right !== null) {
                        queue.enqueue(node.right);
                    }
                }
            }
        }
        return traversedList
    }

}