/*Name - Ololade Akinloye
 Email - ololade220@gmail.com
 Github - dchefcoder
 */

class TreeNode<T> {
    data: T;
    leftPointer: TreeNode<T> | null;
    rightPointer: TreeNode<T> | null;
    

    constructor(value: T) {
     this.data = value;
     this.leftPointer = null;
     this.rightPointer = null;
    }
}
class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
     this.root = null;
    }
    // implementing insert using Queue
    insert(value: T) {
     let newNode = new TreeNode(value);
     if(!this.root){
         this.root = newNode;
         return;
     }
     let queue : TreeNode<T>[] = [];
        queue.push(this.root);
        while(queue.length > 0){
            let currNode = queue.shift();
            if(currNode){
                if(currNode.leftPointer){
                    queue.push(currNode.leftPointer);
                }else{
                    currNode.leftPointer = newNode;
                    return;
                }
                if(currNode.rightPointer){
                    queue.push(currNode.rightPointer);
                }else{
                    currNode.rightPointer = newNode;
                    return;
                }
            }
        }
}
// Implementing tree traversal using Queue
traverse():T[]{

    if(!this.root){
        return [];
    }
    let queue: TreeNode<T>[] = [];
    queue.push(this.root);
    let result: T[] = [];
    while(queue.length > 0){
        let currNode = queue.shift();
        result.push(currNode!.data);
        if(currNode!.leftPointer){
            queue.push(currNode!.leftPointer);
        }
        if(currNode!.rightPointer){
            queue.push(currNode!.rightPointer);
        }
    }
    return result;}
    }
const bTree = new BinaryTree

bTree.insert(1)
bTree.insert(2)
bTree.insert(3)
bTree.insert(4)
bTree.insert(5)
console.log(bTree.traverse());