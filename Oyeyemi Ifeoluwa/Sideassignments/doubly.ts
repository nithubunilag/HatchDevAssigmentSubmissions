// class DNode<T> {
//     data: T
//     next: DNode<T>
//     prev: DNode<T>

//     constructor (val:T){
//         this.data = val
//         this.next = this.prev
//     }
    
// }

// class DoublyList<T>{
//     head: DNode<T>
//     newNode: DNode<T>

//     add(val: T, position?: number){
//         const newNode = new DNode(val)

//         if (!this.head){
//             this.head = newNode
//             this.newNode = newNode
//             return
//         }

//         let currentNode = this.head
        
//         while(currentNode.next != undefined){
//             currentNode = currentNode.next
//             currentNode.next = currentNode.prev
//         }
//         currentNode.next = newNode
//     }

//     print(){

//         let arr : T[] = []

//         if(!this.head){
//             return
//         }

//         let currNode = this.head        
//         while(currNode){
//             console.log(currNode.data)
//             arr.push(currNode.data)
//             currNode = currNode.next
//         }
//         console.log(arr)
//     }
// }

// const doubly = new DoublyList<number>()
// doubly.add(1)
// doubly.add(2)
// doubly.add(3)
// doubly.add(4)
// // doubly.add(5)
// // doubly.add(6)
// // doubly.add(7)
// doubly.print()


class DNode<T> {
    data: T
    next: DNode<T> | null
    prev: DNode<T> | null

    constructor (val:T){
        this.data = val
        this.next = null
        this.prev = null
    }
}

class DoublyList<T>{
    head: DNode<T> | null
    tail: DNode<T> | null

    constructor(){
        this.head = null
        this.tail = null
    }

    add(val: T){
        const newNode = new DNode(val);

        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail!.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }insertAt(val: T, position: number){
        const newNode = new DNode(val)

        if (position === 0) {
            newNode.next = this.head
            this.head!.prev = newNode
            this.head = newNode
        } else {
            let current = this.head
            let index = 0;

            while (current !== null && index < position) {
                current = current.next
                index++
            }

            if (current !== null) {
                newNode.next = current
                newNode.prev = current.prev
                current.prev!.next = newNode
                current.prev = newNode
            } 
        }
    }



    delete(val: T){
        let currentNode = this.head

        if(currentNode !== null && currentNode.data === val){
            this.head = currentNode.next
            if(this.head !== null){
                this.head.prev = null
            }
            return
        }

        while(currentNode !== null && currentNode.data !== val){
            currentNode = currentNode.next
        }

        if(currentNode === null){
            return
        }

        if(currentNode.next !== null){
            currentNode.next.prev = currentNode.prev;
        } else {
            this.tail = currentNode.prev;
        }

        if(currentNode.prev !== null){
            currentNode.prev.next = currentNode.next;
        }
    }

//     print(){
//     let currNode = this.head;

//     while(currNode){
//         console.log(currNode);
//         currNode = currNode.next;
//     }
// }

print(){
    let currNode = this.head;

    while(currNode){
        console.log(currNode);
        currNode = currNode.next;
    }
}


}

const doubly = new DoublyList<number>();
doubly.add(1);
doubly.add(2);
doubly.add(3);
doubly.add(4);
doubly.delete(3);
// doubly.insertAt(5, 2)
doubly.print();
