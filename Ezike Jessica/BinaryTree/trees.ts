class node<T> {
    leftPointer: node<T>
    data: T
    rightPointer: node<T>
}

class BinaryTree<T> {
    root: node<T>

    Traverse() {
        /// if the tree is empty
        if(!this.root) {
            return
        }

        //if there is elements in the tree
        let queue: node<T>[] = [this.root]
        let arr:T[] = []
        while(queue.length > 0) {
            let current = this.root
            if(current.leftPointer) {
                queue.push(current.leftPointer)
            }
            if(current.rightPointer){
                queue.push(current.rightPointer)
            }
            let x = queue.shift()
            arr.push(x?.data!)
            
        }
    }
}