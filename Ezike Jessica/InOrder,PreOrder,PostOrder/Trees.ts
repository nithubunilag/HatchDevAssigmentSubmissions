class node<T> {
    leftPointer: node<T> | null = null;
    data: T
    rightPointer: node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class BinaryTree<T> {
    root: node<T> | null = null;

    BFSTransverse() {
        /// if the tree is empty
        if(!this.root) {
            return
        }

        //if there is elements in the tree
        let queue: node<T>[] = [this.root]
        let arr:T[] = []
        while(queue.length > 0) {
            let current = queue.shift()!
            arr.push(current.data)

            if(current.leftPointer) {
                queue.push(current.leftPointer)
            }
            if(current.rightPointer){
                queue.push(current.rightPointer)
            }
            
        }

        return arr
    }


    insert(val: T){
        const newNode = new node<T>(val)

        if(!this.root){
            this.root = newNode
            return;
        }

        let queue: node<T>[] = []
        queue.push(this.root)

        while(queue.length > 0) {
            let curr = queue.shift()!

            if(curr.leftPointer === null) {
                curr.leftPointer = newNode
                return;
            }
            else if(curr.rightPointer === null) {
                curr.rightPointer = newNode
                return;
            }
            else {
                queue.push(curr.leftPointer)
                queue.push(curr.rightPointer)
            }
        }
    }

    //Depth First Search
    // There are 3 types that can be implemented
    //>>>Preorder       PLR
    //>> Inorder and    LPR 
    //>> Postorder      LRP
   
    //my implementation
    PreOrdertraverse(element: node<T> | null): T[]{
        
        if(!element){
            return [];
        }

        let travArr: T[] = [];

        travArr.push(element.data)

        if(element.leftPointer ){
            travArr.push(...this.PreOrdertraverse(element.leftPointer!))
        }
        if(element.rightPointer){
            travArr.push(...this.PreOrdertraverse(element.rightPointer!)) 
        }
              
        return travArr;
    }

    
    // my implimentation
    InorderTraverse(element: node<T> | null): T[]{
        
        if(!element){
            return [];
        }

        let travArr: T[] = [];

        if(element.leftPointer ){
            travArr.push(...this.InorderTraverse(element.leftPointer!))
        } 
        travArr.push(element.data)
        if(element.rightPointer){
            travArr.push(...this.InorderTraverse(element.rightPointer!)) 
        }
        
        return travArr;
    }


    // my implementation of postorder
    PostTraverse(element: node<T> | null): T[]{
        
        if(!element){
            return [];
        }

        let travArr: T[] = [];
        if(element.leftPointer ){
            travArr.push(...this.PostTraverse(element.leftPointer!))
        } 
        if(element.rightPointer){
            travArr.push(...this.PostTraverse(element.rightPointer!)) 
        }
        travArr.push(element.data)
        
        return travArr;
    }

}



let Tree = new BinaryTree()
Tree.insert(1)
Tree.insert(2)
Tree.insert(3)
Tree.insert(4)
Tree.insert(5)
Tree.insert(6)
Tree.insert(7)
Tree.insert(8)
console.log(Tree)

//        1
//       / \
//      2   3
//     / \ / \
//    4  5 6  7
//   /
//  8 

let Values = Tree.BFSTransverse()
console.log("BFS Traversal:", Values)

let root = Tree.root
let postOrderValues = Tree.PostTraverse(root) 
console.log("Post-order Traversal:", postOrderValues)

let preOrderValues = Tree.PreOrdertraverse(root) 
console.log("Pre-order Traversal:", preOrderValues)

let inorderValues = Tree.InorderTraverse(root)
console.log("In-order Traversal:", inorderValues)
