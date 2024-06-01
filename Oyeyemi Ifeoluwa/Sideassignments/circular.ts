class CNode<T> {
    data: T
    next: CNode<T> | null

    constructor(data: T) {
        this.data = data
        this.next = null
    }
}

class CircularLinkedList<T> {
    head: CNode<T> | null
    tail: CNode<T> | null

    constructor(){
        this.head = null
        this.tail = null
    }

    add(val: T){
        const newNode = new CNode(val)

        if (!this.head){
            this.head = newNode
            this.tail = newNode
            newNode.next = newNode
        } else {
            this.tail!.next = newNode
            newNode.next = this.head
            this.tail = newNode
        }
    }

    insertAt(val: T, position: number){
        const newNode = new CNode(val)

        if (position === 0) {
            newNode.next = this.head
            this.tail!.next = newNode
            this.head = newNode
        } else {
            let current = this.head
            let index = 0

            while (current !== null && index < position - 1) {
                current = current.next
                index++
            }

            if (current !== null) {
                newNode.next = current.next
                current.next = newNode
                if (newNode.next === this.head) {
                    this.tail = newNode
                }
            } 
        }
    }

    // print(){
    //     let arr : T[] = [];
    //     let currNode = this.head;

    //     if (currNode !== null) {
    //         do {
    //             arr.push(currNode.data);
    //             currNode = currNode.next;
    //         } while (currNode !== this.head);
    //     }

    //     console.log(arr);
    // }

    print(){
        let currNode = this.head;
    
        if (currNode !== null) {
            do {
                console.log(currNode);
                currNode = currNode.next;
            } while (currNode !== this.head);
        }
    }
    
}

const circularList = new CircularLinkedList<number>();
circularList.add(1);
circularList.add(2);
circularList.add(3);
circularList.add(4);
circularList.insertAt(5, 2);  
circularList.print();  
