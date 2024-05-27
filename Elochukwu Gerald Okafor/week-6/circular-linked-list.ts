/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */
export type CNodeType<T> = CNode<T> | null;

/** Circular Node */
export class CNode<T> {
    public readonly data: T;
    private next: CNodeType<T>;

    // Initialize the circular node with data
    constructor(val: T) {
        this.data = val;
        this.next = this;
    }

    // Get the next
    get getNext(): CNodeType<T> {
        return this.next;
    }

    // Set the next
    public setNext(newNode: CNodeType<T>) {
        this.next = newNode;
    }
}

/**
 * Circular Linked List
 *      a linked list that has its tail pointing back to the head
 * */
export class CLinkedList<T> {
    public head: CNodeType<T>;
    public tail: CNodeType<T>;
    private size: number = 0;

    // Initialize the circular linked list with some data
    constructor(initial: T[]) {
        if (initial.length > 0) {
            this.size = initial.length;
            this.head = new CNode(initial[0]);

            // Build a circular linked list from the second -> last elements
            let currNode: CNodeType<T> = this.head;

            for (let i = 1; i < this.size; i += 1) {
                const newNode = new CNode(initial[i]);
                currNode!.setNext(newNode);
                // Move to the next node
                currNode = currNode!.getNext;
            }

            // Set the last node to the tail
            currNode!.setNext(this.head);
            this.tail = currNode;
        }
    }

    // Adds a node to a position in the linked list
    public add(val: T, pos: number = this.size): void {
        // Edge case: pos <= 0, invalid pos
        if (pos <= 0) {
            console.error('Err: Position cannot be negative.');
            return;
        }

        const newNode = new CNode(val);

        // Edge case: the linked list is empty
        if (this.head == null) {
            this.head = newNode;
            return;
        }

        // Edge case: pos == 1, just replace the head
        if (pos == 1) {
            newNode.setNext(this.head);
            this.head = newNode;
            this.size += 1;
            return;
        }

        // Edge case: pos >= size, just move the tail
        if (pos >= this.size) {
            this.tail!.setNext(newNode);
            this.tail = newNode;
            this.tail.setNext(this.head); // maintain circular nature
            this.size += 1;
            return;
        }

        // Adding to the middle
        let i = 1;
        let currNode: CNodeType<T> = this.head;

        // Iterate until just before the position
        while (i < pos - 1) {
            currNode = currNode!.getNext;
            i += 1;
        }

        newNode.setNext(currNode!.getNext);
        currNode!.setNext(newNode);
        this.size += 1;
    }

    // Removes a node from any valid position
    public remove(pos: number): CNodeType<T> {
        // Edge case: there's no head
        if (this.head == null) {
            console.error('Err: Cannot remove from an empty list');
            return null;
        }

        // Edge case: out of bounds position
        if (pos <= 0 || pos > this.size) {
            console.error('Err: Position out of bounds.');
            return null;
        }

        // Edge case: pos == 1, removing head
        if (pos == 1) {
            const oldHead: CNode<T> = this.head;

            this.head = oldHead.getNext; // new head is old head's next
            this.tail!.setNext(this.head); // set the tail to point to new head
            this.size -= 1;

            return oldHead;
        }

        // Edge case: pos == size, removing tail
        if (pos == this.size) {
            let currNode: CNode<T> = this.head;
            let i = 1;

            // Iterate until second to last element
            while (i < this.size - 1 && currNode.getNext != null) {
                currNode = currNode.getNext;
                i += 1;
            }

            this.tail = currNode;
            this.tail.setNext(this.head);
            this.size -= 1;

            return currNode.getNext; // old tail
        }

        // Removing from the middle
        let currNode: CNodeType<T> = this.head;
        let i = 1;

        while (i < this.size && currNode != null && currNode.getNext != null) {
            // Just before the target node
            if (i + 1 == pos) {
                let targetNode = currNode.getNext;

                // Set the current nodes next to target node's next
                currNode.setNext(targetNode.getNext);

                // Set the target node's next to null
                targetNode.setNext(null);

                this.size -= 1;

                return targetNode;
            }

            currNode = currNode.getNext;
            i += 1;
        }

        return null;
    }

    // Lists the nodes in the linked list
    // since this is circular, keep track of the first complete loop
    public iterate(): void {
        if (!this.head) return;

        let nodes: T[] = [];
        let currNode: CNodeType<T> = this.head;
        let nodePos = 1;

        while (currNode != null && nodePos <= this.size) {
            nodes.push(currNode.data);
            currNode = currNode.getNext;
            nodePos += 1;
        }

        console.log(nodes);
    }
}

const cll = new CLinkedList(['some', 'circular']);

cll.add('linked', 3);
cll.add('second', 2);
cll.add('nice', 3);
cll.add('list');

cll.remove(3); // removes 'nice'
cll.iterate();

cll.iterate();

console.log(cll);
console.log(cll.head);
