class LNode {
    data: number;
    next: LNode | null;
    prev: LNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    head: LNode | null;
    tail: LNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add a lNode at the end of the list
    add(data: number) {
        const newLNode = new LNode(data);
        if (this.head === null) {
            this.head = newLNode;
            this.tail = newLNode;
            newLNode.next = newLNode;
            newLNode.prev = newLNode;
        } else {
            newLNode.prev = this.tail;
            newLNode.next = this.head;
            this.tail!.next = newLNode;
            this.head!.prev = newLNode;
            this.tail = newLNode;
        }
    }

    // Method to add a lNode at the beginning of the list
    addAtBeginning(data: number) {
        const newLNode = new LNode(data);
        if (this.head === null) {
            this.head = newLNode;
            this.tail = newLNode;
            newLNode.next = newLNode;
            newLNode.prev = newLNode;
        } else {
            newLNode.next = this.head;
            newLNode.prev = this.tail;
            this.head!.prev = newLNode;
            this.tail!.next = newLNode;
            this.head = newLNode;
        }
    }

    // Method to add a lNode at a specified position in the list
    addAtPosition(data: number, position: number): void {
        if (position < 0) {
            throw new Error("Position must be a non-negative integer.");
        }

        const newLNode = new LNode(data);

        if (position === 0) {
            this.addAtBeginning(data);
            return;
        }

        let current = this.head;
        let currentIndex = 0;

        while (currentIndex < position - 1 && current!.next !== this.head) {
            current = current!.next;
            currentIndex++;
        }

        if (current!.next === this.head && currentIndex < position - 1) {
            throw new Error("Position out of bounds.");
        }

        newLNode.next = current!.next;
        newLNode.prev = current;

        if (current!.next !== this.head) {
            current!.next!.prev = newLNode;
        } else {
            this.tail = newLNode;
        }

        current!.next = newLNode;
    }

    // Method to delete a lNode from the beginning of the list
    deleteFromBeginning(){
        if (this.head !== null) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head!.prev = this.tail;
                this.tail!.next = this.head;
            }
        }
    }

    // Method to delete a lNode from the end of the list
    deleteFromEnd() {
        if (this.tail !== null) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail!.next = this.head;
                this.head!.prev = this.tail;
            }
        }
    }

    // Method to delete a lNode at a specified position in the list
    deleteAtPosition(position: number){
        if (position < 0 || this.head === null) {
            throw new Error("Position must be a non-negative integer and the list must not be empty.");
        }

        if (position === 0) {
            this.deleteFromBeginning();
            return;
        }

        let current: LNode | null = this.head;
        let currentIndex = 0;

        while (currentIndex < position && current!.next !== this.head) {
            current = current!.next;
            currentIndex++;
        }

        if (current!.next === this.head && currentIndex < position) {
            throw new Error("Position out of bounds.");
        }

        if (current!.next !== this.head) {
            current!.next!.prev = current!.prev;
        } else {
            this.tail = current!.prev;
        }

        if (current!.prev !== null) {
            current!.prev!.next = current!.next;
        }
    }

    // Method to print the list
    printList() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        let current = this.head;
        const output: string[] = [];
        do {
            output.push(current.data.toString());
            current = current.next!;
        } while (current !== this.head);
        console.log(output.join(" -> ") + " -> ... (circular list)");
    }
}

//===================== Usage ==========================
const list = new CircularDoublyLinkedList();
list.add(3);
list.add(5);
list.add(13);
list.add(2);
list.printList()
list.addAtPosition(10, 2);
list.printList(); 

list.deleteFromBeginning();
list.printList(); 

list.deleteFromEnd();
list.printList();

list.deleteAtPosition(1);
list.printList();

// ======================== The End ======================== 