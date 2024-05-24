class BinaryTreeNode<T>{
    data: T;
    left_node: BinaryTreeNode<T> | null;
    right_node: BinaryTreeNode<T> | null;

    constructor(data:T){
        this.data = data;
        this.left_node = null;
        this.right_node = null;
    }
}

class BinaryTree<T>{
    root: BinaryTreeNode<T> | null;

    insert(val: T): void {
        const newNode = new BinaryTreeNode(val);
    
        if (!this.root) {
            this.root = newNode;
            return;
        }
    
        let current = this.root;
        const queue: BinaryTreeNode<T>[] = [this.root];
    
        while (queue.length > 0) {
            current = queue.shift()!;
    
            if (!current.left_node) {
                current.left_node = newNode;
                break;
            } else {
                queue.push(current.left_node);
            }
    
            if (!current.right_node) {
                current.right_node = newNode;
                break;
            } else {
                queue.push(current.right_node
                );
            }
        }
    }

    levelOrderTraversal(){
        if(!this.root){
            return;
        }
        let queue: BinaryTreeNode<T> [] = [this.root];
        let traversedArray: BinaryTreeNode<T>[] = [];
        while(queue.length > 0){
            let Bcurrent: BinaryTreeNode<T>|undefined =queue.shift();
            if(Bcurrent!.left_node){
                queue.push(Bcurrent!.left_node)
            }
            if(Bcurrent?.right_node){
                queue.push(Bcurrent.right_node);
            }
            traversedArray.push(Bcurrent!)
        }
        return traversedArray;
    }
}

const myBinaryTree = new BinaryTree();
myBinaryTree.insert(1);
myBinaryTree.insert(2);
myBinaryTree.insert(3);
myBinaryTree.insert(4);
myBinaryTree.insert(5);

console.log(myBinaryTree.levelOrderTraversal())




