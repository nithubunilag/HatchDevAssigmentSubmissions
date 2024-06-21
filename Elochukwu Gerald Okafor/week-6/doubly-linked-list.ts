/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */
// Double node or null type
export type DNode<T> = DoubleNode<T> | null;

/** Doubly linked node
 * data: data this node contains
 * next: reference to the next node
 * prev: reference to the previous node
 */
export class DoubleNode<T> {
    public data: T;
    private next: DNode<T>;
    private prev: DNode<T>;

    // Initialize the node with some data
    constructor(val: T) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }

    // Get this node's next node reference
    public getNext(): DNode<T> {
        return this.next;
    }

    // Set this node's next pointer
    public setNext(node: DNode<T>): void {
        this.next = node;
    }

    // Get this node's prev node reference
    public getPrev(): DNode<T> {
        return this.prev;
    }

    // Set the node's prev pointer
    public setPrev(node: DNode<T>): void {
        this.prev = node;
    }
}

/**
 * Doubly Linked List
 * head: pointer to the head node
 * tail: pointer to the tail node
 * size: linked list size
 */
export class DoublyLinkedList<T> {
    private head: DNode<T>; // head pointer
    private tail: DNode<T>; // tail pointer
    public size: number; // node count

    // Initialize the doubly linked list with some data
    constructor(values: T[] = []) {
        if (values.length != 0) {
            this.head = new DoubleNode(values[0]); // the head is the first element

            let currNode: DNode<T> = this.head;

            for (let i = 1; i < values.length; i += 1) {
                const nextNode = new DoubleNode(values[i]);

                // Next node's prev is the current, curr node's next is the next node
                nextNode.setPrev(currNode);
                currNode?.setNext(nextNode);

                // If this is the second to last element, set the tail as the next
                if (i + 1 == values.length) {
                    this.tail = nextNode;
                }

                currNode = nextNode;
            }

            this.size = values.length;
        }
    }

    // Get the head pointer
    public getHead(): DNode<T> {
        return this.head;
    }

    // Get the tail pointer
    public getTail(): DNode<T> {
        return this.tail;
    }

    // Append a node to the tail
    public append(val: T): void {
        const newNode = new DoubleNode(val);

        // Edge case: List is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.size = 1;

            return;
        }

        newNode.setPrev(this.tail); // set prev to the current tail
        this.tail?.setNext(newNode); // set curr tail next to this new node

        this.tail = newNode;
        this.size += 1;
    }

    // Prepend a node to the head
    public prepend(val: T): void {
        const newNode = new DoubleNode(val);

        // Edge case: List is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;

            this.size = 1;
            return;
        }

        newNode.setNext(this.head); // new node's next is the current head
        this.head.setPrev(newNode); // current head's prev is the new node

        this.head = newNode;
        this.size += 1;
    }

    // Insert to the middle of the linked list, 1-indexed
    public insert(val: T, pos: number) {
        // Edge case: List is empty
        if (!this.head) {
            this.prepend(val);
            return;
        }

        // Edge case: Out of bounds
        if (pos < 0 || pos > this.size + 1) {
            throw new Error('Err: Out of bounds insertion.');
        }

        // Edge case: If pos == 0, then prepend
        if (pos == 0) {
            this.prepend(val);
            return;
        }

        // Edge case: If pos == size + 1, then append
        if (pos == this.size) {
            this.append(val);
            return;
        }

        const newNode = new DoubleNode(val);
        let currNode: DNode<T> = this.head;
        let i = 1;

        // Just before the position
        while (i != pos && currNode != null) {
            currNode = currNode.getNext();
            i += 1;
        }

        // Update the new node pointers
        newNode.setNext(currNode);
        newNode.setPrev(currNode?.getPrev()!);

        // Update the curr node's prev and next pointers
        currNode!.getPrev()?.setNext(newNode);
        currNode!.setPrev(newNode);

        this.size += 1;
    }

    // Removes from any valid position
    public remove(pos: number): DNode<T> {
        // Edge case: Out of bounds
        if (pos < 0 || pos > this.size) {
            throw new Error('Err: Out of bounds removal.');
        }

        // Edge case: List is empty
        if (!this.head) {
            throw new Error(
                `Err: Cannot remove from pos '${pos} of an empty list.`
            );
        }

        // Edge case: If pos == 0, replace the head
        if (pos == 0) {
            const oldHead = this.head;
            this.head = oldHead.getNext();

            oldHead.setNext(null);
            this.size -= 1;
            return oldHead;
        }

        // Edge case: If pos == size, replace the tail
        if (pos == this.size) {
            const oldTail = this.tail;
            this.tail = oldTail?.getPrev()!;

            oldTail?.setPrev(null);
            this.size -= 1;
            return oldTail;
        }

        let currNode: DNode<T> = this.head;
        let i = 1;

        // Just before the target
        while (i < pos - 1 && currNode != null) {
            currNode = currNode.getNext();
            i += 1;
        }

        const deletedNode: DNode<T> = currNode?.getNext() ?? null;
        if (deletedNode) {
            deletedNode.getNext()?.setPrev(currNode); // node after deleted's prev is current
            currNode?.setNext(deletedNode.getNext()); // node before deleted's next is deleted node's next

            // Abandoned :)
            deletedNode.setNext(null);
            deletedNode.setPrev(null);

            this.size -= 1;
            return deletedNode;
        }

        return null;
    }

    // Prints the linked list
    public print(): void {
        const nodes: T[] = [];
        let nodeString = '|| ';
        let curr: DNode<T> = this.head;

        while (curr) {
            nodes.push(curr.data);
            nodeString += `${curr.getPrev()?.data ?? 'NULL'} <- ${
                curr.data
            } -> ${curr.getNext()?.data ?? 'NULL'} || `;
            curr = curr.getNext();
        }

        console.log('Size:', this.size);
        console.log('Nodes array:', nodes);
        console.log('Visualized:\n', nodeString);
    }
}

// Testing
const activityList = new DoublyLinkedList(['typescript', 'linked', 'lists']);

activityList.append('implementation');
activityList.prepend('attempt');
activityList.insert('doubly', 3);

activityList.remove(3); // removes 'doubly'
activityList.remove(2); // removes 'typescript'

// activityList.print();
