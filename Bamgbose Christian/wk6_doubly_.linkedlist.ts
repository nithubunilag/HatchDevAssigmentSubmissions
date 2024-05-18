// Building a doubly linked list, adding and removing nodes
// Node
class DNode<T> {
    data: T;
    next: DNode<T> | null;
    prev: DNode<T> | null;

    constructor(val: T) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
// doubly-linked list

class DLinkedList<T> {
    head: DNode<T> | null;
    tail: DNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }
  
    // adding a node
    add(val: T) {
        const newNode = new DNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
    }

    // deleting a node
    public delete(val: T) {
        if (!this.head) {
            return;
        }
        let curr = this.head;

        while (curr) {
            if (curr.data === val) {
                if (curr === this.head && curr === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (curr === this.head) {
                    this.head = curr.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                } else if (curr === this.tail) {
                    this.tail = curr.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                } else {
                    if (curr.prev) {
                        curr.prev.next = curr.next;
                    }
                    if (curr.next) {
                        curr.next.prev = curr.prev;
                    }
                }
                break;
            }
            
        }
    }
}

const dl = new DLinkedList();

dl.add('list');
console.log(DLinkedList);

