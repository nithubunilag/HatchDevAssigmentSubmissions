class LNode<T> {
    data: T;
    next: LNode<T> | null = null;
    previous: LNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
    head: LNode<T> | null = null;

    add(data: T): void {
        const newNode = new LNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.previous = currentNode;
        }
    }

    addAtPosition(data: T, position: number): void {
        const newNode = new LNode(data);
        if (position <= 0 || !this.head) {
            newNode.next = this.head;
            if (this.head) {
                this.head.previous = newNode;
            }
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode.next && currentIndex < position - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        newNode.next = currentNode.next;
        if (currentNode.next) {
            currentNode.next.previous = newNode;
        }
        currentNode.next = newNode;
        newNode.previous = currentNode;
    }

    delete(data: T): boolean {
        if (!this.head) return false;

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                if (currentNode.previous) {
                    currentNode.previous.next = currentNode.next;
                } else {
                    this.head = currentNode.next;
                }
                if (currentNode.next) {
                    currentNode.next.previous = currentNode.previous;
                }
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    print(): void {
        const arr: T[] = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(arr.join(' -> '));
    }
}

const linkedList = new LinkedList<number>();
linkedList.add(2);
linkedList.add(76);
linkedList.addAtPosition(10, 1);
linkedList.addAtPosition(5, 0);
linkedList.print(); 

linkedList.delete(10);
linkedList.print(); 
