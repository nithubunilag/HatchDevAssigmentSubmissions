class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class CircularLinkedList<T> {
    private head: Node<T> | null = null;
    private size: number = 0;


    add(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }


    remove(value: T): boolean {
        if (!this.head) return false;

        let current = this.head;
        let previous: Node<T> | null = null;

        do {
            if (current.value === value) {
                if (previous) {
                    previous.next = current.next;
                    if (current === this.head) {
                        this.head = current.next;
                    }
                } else {
                    if (current.next === this.head) {
                        this.head = null;
                    } else {
                        let tail = this.head;
                        while (tail.next !== this.head) {
                            tail = tail.next;
                        }
                        this.head = current.next;
                        tail.next = this.head;
                    }
                }
                this.size--;
                return true;
            }
            previous = current;
            current = current.next;
        } while (current !== this.head);

        return false;
    }

    print(): void {
        if (!this.head) return;

        let current = this.head;
        const result: T[] = [];
        do {
            result.push(current.value);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(' -> ') + ' -> ' + this.head!.value);
    }

    getSize(): number {
        return this.size;
    }
}

const list = new CircularLinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.print();

list.remove(2);
list.print(); 

console.log('Size:', list.getSize()); 
