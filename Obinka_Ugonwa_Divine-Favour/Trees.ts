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


    traverse(){
        
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
let element = mytree.traverse()
console.log(element)    // needs work


// testing operator precedence
let x = 1
console.log(x)
let y = x++
console.log(y)
let z = --y
console.log(z)
console.log(x)


// class ArrBinaryTree<T>{
//     arr: T[] = []
//     root: T | null

//     constructor(){
//         this.root = null
//     }

//     addNode(value: T){
//         if(!this.root){
//             this.root = value
//         }
//     }
// }