// Name: Obinka Ugonwa Divine-Favour
// email: divneobk@gmail.com

class Lnode<T>{
    prev: Lnode<T> | undefined
    data: T | null
    next: Lnode<T> | undefined

    constructor(val: T){
        this.data = val
    }

}

class DoublyLinkedList<T>{
    head: Lnode<T>
    
    // adding to the end of a linked list
    add(newValue: T, position?: number){
        let newNode = new Lnode(newValue)

        if(!this.head){
            this.head = newNode
            return
        }

        let currNode = this.head
        let count = 0
        while(currNode.next !== undefined){
            currNode = currNode.next
            count++
         
        }
        currNode.next = newNode
        newNode.prev = currNode;
    }

    // adding to the beginning
    private addToBeginning() {

    }

    // adding to a position in the linked list
    addAtPosition(val: T, position?: number){
        const newNode = new Lnode(val)

        let current = this.head
        let index: number = 1
        while(current.next !== this.head){
            if(position === index + 1){
                // let nextNode =  current.next   // ope oooo

                // currNode.next = newNode 
                // newNode.next =  nextNode
            }
            current = current.next!
            index++

        }
        // if (count == position){
            //     currNode.next = newNode
            //     newNode.prev = currNode
            //     newNode.next = currNode.next
            //     newNode.next.prev = newNode
            // }
    }

    // delete a value from the linked list
    delete(val: T, position?: number){
        let nodeToDelete = new Lnode(val)

        if (this.head.data == nodeToDelete.data){
            this.head = this.head.next!
            this.head.prev = undefined
            return;
        }
        let currentNode = this.head

        while(currentNode.data !== nodeToDelete.data){
            currentNode = currentNode.next!
        }

        // this look like a lot of gibberish but basically,
        // we're changing only two pointers, the pointer to the node after what we delete and the node before what we delete
        if (currentNode.next !== undefined){    // it the next isn't null
            currentNode.next.prev = currentNode.prev    // this assigns the prev node to the prevpointer of the next node
        }
        if (currentNode.prev !== undefined){    // if the previous isn't null
            currentNode.prev.next = currentNode.next    // this assigns the next node to the nextpointer of the previous node
        }
        return;
    }
}
const dll = new DoublyLinkedList()
dll.add(3)
dll.add(5)
dll.add(6)
dll.delete(5)
dll.add(34)
console.log(dll)