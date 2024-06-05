class CLNode<T> {
    data: T
    next: CLNode<T> | null

    constructor(data: T) {
        this.data = data
        this.next = null
    }
}

class CircularLinkedList<T> {
    head: CLNode<T> | null
    tail: CLNode<T> | null

    constructor(){
        this.head = null
        this.tail = null
    }

    add(val: T){
        const newNode = new CLNode(val)

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
        const newNode = new CLNode(val)

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
    deleteAt(position: number) {
        if (!this.head) {
            return;
        }

        if (position === 0) {
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.tail!.next = this.head
            }
        } else {
            let current = this.head
            let index = 0

            while (current.next !== null && index < position - 1 && current.next !== this.head) {
                current = current.next
                index++
            }

            if (current.next !== null && current.next !== this.head) {
                if (current.next === this.tail) {
                    this.tail = current
                }
                current.next = current.next.next
            }
        }
    }

    print(){
        let currNode = this.head;
    
        if (currNode !== null) {
            do {
                console.log(currNode);
                currNode != currNode.next;
            } 
            while (currNode !== this.head);
        }
    }
    
}

const circularLinkedList = new CircularLinkedList<number>();
circularLinkedList.add(1);
circularLinkedList.add(2);
circularLinkedList.add(3);
circularLinkedList.add(4);
circularLinkedList.insertAt(4, 4); 
circularLinkedList.deleteAt(2) 
circularLinkedList.print();  
