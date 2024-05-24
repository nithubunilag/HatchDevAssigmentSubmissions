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
        queue.push(this.root);

        while (queue.length > 0){
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

    bfsTraversal(): T[] {
        if (!this.root) return [];
        let result: T[] = [];
        let queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node!.value);

            if (node!.left) queue.push(node!.left);
            if (node!.right) queue.push(node!.right);
        }

        return result;
    }

}


const tree = new BinaryTree<number>();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log(tree.bfsTraversal()); 
