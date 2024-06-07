//Name: Emeka Samuel Ifeayinchukwu
//Github username: samthemogul
// Email address: samuelemeka.guru@gmail.com


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
    bfirstTraverse() {
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

    preOrderTraversal(root: TreeNode<T> | null): T[] | undefined {
        const traversedList: T[] = []
        if (root === null) return;
        traversedList.push(root.value);

        // Traverse left subtree
        this.preOrderTraversal(root.left);

        // Traverse right subtree
        this.preOrderTraversal(root.right);

        return traversedList
    }

    inOrderTraversal(root: TreeNode<T> | null): T[] {
        const traversedList: T[] = []
        if (root === null) return traversedList;

        // Traverse left subtree, then root, then right subtree
        traversedList.push(...this.inOrderTraversal(root.left));
        traversedList.push(root.value);
        traversedList.push(...this.inOrderTraversal(root.right));

        return traversedList
    }

    postOrderTraversal(root: TreeNode<T> | null): T[] {
        const traversedList: T[] = []
        if (root === null) return traversedList;

        // Traverse left subtree, then right subtree, then root
        traversedList.push(...this.postOrderTraversal(root.left));
        traversedList.push(...this.postOrderTraversal(root.right));
        traversedList.push(root.value);

        return traversedList
    }

}