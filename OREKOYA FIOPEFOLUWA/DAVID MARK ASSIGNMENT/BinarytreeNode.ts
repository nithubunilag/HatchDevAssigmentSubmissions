class binaryTree<T>{
    val: T
    leftPointer: binaryTree<T> | null
    rightPointer: binaryTree<T> | null

    constructor(val: T){
        this.rightPointer = this.rightPointer,
        this.val = val,
        this.leftPointer = this.leftPointer
    }
}
function binaryTreeOrder<T>(head: binaryTree<T> | null) {

    if(!head){
        return [];
    }

    const queue: binaryTree<T>[] = [head]
    const output: T[] = []

    while(queue.length > 0){
        const node = queue.shift()!
        output.push(node.val)
        
        if(node.leftPointer)
            queue.push(node.leftPointer)

        if(node.rightPointer)
            queue.push(node.rightPointer)
        // const size = queue.length
        
        // for(let i = 0; i < size; i++){i
        //     const npointer = queue.shift()!
        //     console.log(npointer.val)

        //     if(npointer.leftPointer)
        //         queue.push(npointer.leftPointer)
        //     if(npointer.rightPointer)
        //         queue.push(npointer.rightPointer)
        // }
    }
    return output;

   
}


const head = new binaryTree(1)
head.leftPointer = new binaryTree(2)
head.rightPointer = new binaryTree(3)
head.leftPointer.leftPointer = new binaryTree(4)
head.leftPointer.rightPointer = new binaryTree(5)
head.rightPointer.leftPointer = new binaryTree(6)
head.rightPointer.rightPointer = new binaryTree(7)
head.leftPointer.leftPointer.leftPointer = new binaryTree(8)
head.leftPointer.leftPointer.rightPointer = new binaryTree(9)
head.rightPointer.leftPointer.leftPointer = new binaryTree(10)
head.rightPointer.leftPointer.rightPointer = new binaryTree(11)

const value = binaryTreeOrder(head)
console.log(value)