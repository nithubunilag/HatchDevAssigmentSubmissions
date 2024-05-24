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


class Binarytree<T>{
    root: TNode<T>

    insertion(val: T){

    }

   
    traverse(){
        
        let travArr: T[] = []
        let queue: TNode<T>[] = [this.root]

        let currNode;
        while(queue.length > 0){
            
            currNode = queue.shift();

            if(currNode.Lchild !== null ){
                queue.push(currNode.Lchild)
            }
            if(currNode.Rchild !== null)
                queue.push(currNode.Rchild)
            }
            let element = queue.shift()
            travArr.push(element?.data!)
        
        }
    }

   

// testing operator precedence
let x = 1
console.log(x)
let y = x++
console.log(y)
let z = --y
console.log(z)
console.log(x)