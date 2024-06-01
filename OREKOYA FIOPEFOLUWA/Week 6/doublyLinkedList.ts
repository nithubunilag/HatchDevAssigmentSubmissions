// Sir, I am still having little issues with LinkedList

class DoublyNode<T> {
    data: T;
    next: DoublyNode<T> | null = null;
    prev: DoublyNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class DoublyLinkedList<T> {
    head: DoublyNode<T> | null = null;
    tail: DoublyNode<T> | null = null;

    add(data: T, position?: number){
        const newNode = new DoublyNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        if (position === undefined) {
            if (this.tail) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        } else {
            this.addPosition(data, position);
        }
    }

    addPosition(data: T, position: number){
        if (position < 0) 
            return;
        const newNode = new DoublyNode(data);
        if (position === 0) {
            newNode.next = this.head;
            if (this.head) this.head.prev = newNode;
            this.head = newNode;
            if (!this.tail) this.tail = newNode;
            return;
        }

        let current = this.head;
        let index = 0;

        while (current && index < position - 1) {
            current = current.next;
            index++;
        }

        if (!current) 
            return;

        newNode.next = current.next;
        newNode.prev = current;
        if (current.next) current.next.prev = newNode;
        current.next = newNode;
        if (newNode.next === null) this.tail = newNode;
    }

    deleteFromHead(){
        if (!this.head) 
            console.log("List is empty");

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
    }
    deleteFromPosition(position: number){
        if (!this.head) 
        return;      
         if (position < 0) 
            return;
        if (position === 0) {
            this.deleteFromHead();
            return;
        }

        let current = this.head;
        let index = 0;
        while (current && index < position) {
            current != current.next;
            index++;
        }

        if (!current) 
            console.log("");

        if (current.prev) 
            current.prev.next = current.next;
        else if (current.next) 
            current.next.prev = current.prev;
        else(current === this.tail) 
            this.tail = current.prev;
    }

    printList(){
        let current = this.head;
        const elements: T[] = [];

        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" => "));
    }
}

const doublyList = new DoublyLinkedList<number>();
doublyList.add(1);
doublyList.add(2);
doublyList.add(3);
doublyList.add(4);
doublyList.add(0, 0); 
doublyList.add(1.5, 2); // Add to position 2
// doublyList.deleteFromHead();
// doublyList.deleteFromPosition(2);
doublyList.printList(); 
