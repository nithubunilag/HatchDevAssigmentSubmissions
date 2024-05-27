class TNode<T>{
    Lchild: TNode<T> | null
    data: T
    Rchild: TNode<T> | null

    constructor(val: T){
        this.data = val
        this.Lchild = null
        this.Rchild = null
    }
}

class BinaryTree<T>{
    root: TNode<T> | null

    constructor(){
        this.root = null
    }

    insert(value: T){
        const newNode = new TNode(value)

        if(!this.root){
            this.root = newNode
            return;
        }

        let queue: TNode<T>[] = []
        queue.push(this.root)

        while(queue.length > 0){
            let curr = queue.shift()

            if(curr!.Lchild === null){
                curr!.Lchild = newNode
                return;
            }else if(curr!.Rchild === null){
                curr!.Rchild = newNode
                return;
            }else{
                queue.push(curr!.Lchild)
                queue.push(curr!.Rchild)
            }
        }
    }


    bfstraverse(){
        
        if(!this.root){
            return
        }

        let travArr: T[] = []
        let queue: TNode<T>[] = [this.root!]

        let currNode;
        while(queue.length > 0){
            
            currNode = queue.shift();

            if(currNode.Lchild !== null ){
                queue.push(currNode.Lchild)
            }
            if(currNode.Rchild !== null){
                queue.push(currNode.Rchild)
            }
        }

        let element = queue.shift()
        travArr.push(element?.data!)
        
        return travArr
    }
    
    

    // my implementation of pre order traversal
    mypretraverse(element: TNode<T> | null): T[]{
        
        if(!element){
            return [];
        }

        let travArr: T[] = [];
        
        while(element){

            travArr.push(element.data)

            if(element.Lchild ){
                travArr.push(...this.mypretraverse(element.Lchild!))
            } 
            if(element.Rchild){
                travArr.push(...this.mypretraverse(element.Rchild!)) 
            }
            
        }  
        return travArr;
    }

    
    preorder(node: TNode<T> | null): T[]{

        if(!node) return []

        let output: T[] = []
        output.push(node?.data!)
        output.push(...this.preorder(node!.Lchild))
        output.push(...this.preorder(node!.Rchild))

        return output
    }

    // my in order traversal
    myintraverse(element: TNode<T> | null): T[]{
        
        if(!element){
            return [];
        }

        let travArr: T[] = [];
        
        while(element){

            if(element.Lchild ){
                travArr.push(...this.myintraverse(element.Lchild!))
            } 
            travArr.push(element.data)
            if(element.Rchild){
                travArr.push(...this.myintraverse(element.Rchild!)) 
            }
            
        }  
        return travArr;
    }


    inorder(node: TNode<T> | null): T[]{
        if(!node) return []

        let output: T[] = []
        
        output.push(...this.inorder(node!.Lchild))
        output.push(node?.data!)
        output.push(...this.inorder(node!.Rchild))

        return output
    }

    // my post order traversal
    myposttraverse(element: TNode<T> | null): T[]{
        
        if(!element){
            return [];
        }

        let travArr: T[] = [];
        
        while(element){

            if(element.Lchild ){
                travArr.push(...this.myposttraverse(element.Lchild!))
            } 
            travArr.push(element.data)
            if(element.Rchild){
                travArr.push(...this.myposttraverse(element.Rchild!)) 
            }
            
        }  
        return travArr;
    }

    postorder(node: TNode<T> | null): T[]{
        if(!node) return []

        let output: T[] = []
        
        output.push(...this.postorder(node!.Lchild))
        output.push(...this.postorder(node!.Rchild))
        output.push(node?.data!)

        return output
    }
}


// implementing
let mytree = new BinaryTree()
mytree.insert(1)
mytree.insert(3)
mytree.insert(6)
mytree.insert(34)
mytree.insert(12)
mytree.insert(65)
mytree.insert(9)
mytree.insert(11)
console.log(mytree)
let element = mytree.bfstraverse()
console.log(element)
let root = mytree.root
let trav = mytree.postorder(root) 
console.log(trav)
let mytrav = mytree.mypretraverse(root) 
console.log(mytrav)



