/** Doubly Linked List Node */
class PNode<T> {
    public data: T;
    public next: PNode<T>;
    public prev: PNode<T>;

    // Initializes a node with a value
    constructor(val: T) {
        this.data = val;
    }

    public setNext(newNode: PNode<T>) {
        this.next = newNode;
    }

    public setPrev(newNode: PNode<T>) {
        this.prev = newNode;
    }
}

/** Doubly Linked List */
class my_DLinkedList<T> {
    public head: PNode<T>;
    public tail: PNode<T>;

    // Initialize the doubly linked list with some data
    // [1, 2, 3]
    constructor(initial: T[]) {
        this.head = new PNode(initial[0]);

        let curr: PNode<T> = this.head;
        let i = 1;

        for (i; i < initial.length; i++) {
            let nextNode = new PNode(initial[i]);

            nextNode.setPrev(curr);
            curr.setNext(nextNode);

            // If this is the last item, set tail to it
            if (i + 1 == initial.length) this.tail = nextNode;
            curr = nextNode;
        }
    }

    public add(val: T, position?: number): void {
        const newTail = new PNode(val);

        // Edge case: there are no nodes
        if (this.head == null) {
            this.head = newTail;
            return;
        }

        // Set the new tail's prev to the curr tail, 
        // and the curr tail's next to the new tail
        newTail.setPrev(this.tail);
        this.tail.setNext(newTail);

        this.tail = newTail;
    }

    public delete(val: T): T | null {
        // If there's a node
        if (this.head != null) {
            let currNode = this.head;

            while (currNode != null) {
                if (currNode.data == val) {
                    const newNext = currNode.next;  // Node after target
                    const newPrev = currNode.prev;  // Node before target

                // The node before points to the node after the target
                    newPrev?.setNext(newNext);

                // The node after points to the node before the target
                    newNext?.setPrev(newPrev);

                    return currNode.data;
                }

                currNode = currNode.next;
            }
        }

        return null;
    }

    // 1 <-> 3 <-> 4
}

const dlist = new my_DLinkedList(['some', 'new', 'linked']);

dlist.add('list');
console.log(dlist.head);

dlist.delete('new');
console.log(dlist)