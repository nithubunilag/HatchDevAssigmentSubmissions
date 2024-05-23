// Double node or null type
type DNode<T> = DoubleNode<T> | null;

/** Doubly linked node
 * data: data this node contains
 * next: reference to the next node
 * prev: reference to the previous node
 */
class DoubleNode<T> {
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
 */
class DoublyLinkedList<T> {
    private head; // head pointer
    private tail; // tail pointer
    private size; // node count

    // Initialize the doubly linked list with some data
    constructor(values: T[]) {
        if (values.length != 0) {
            this.head = new DoubleNode(values[0]); // the head is the first element

            let currNode: DNode<T> = this.head;

            for (let i = 1; i < values.length; i += 1) {
                const nextNode = new DoubleNode(values[i]);

                // Next node's prev is the current, curr node's next is the next node
                nextNode.setPrev(currNode);
                currNode?.setNext(nextNode);

                // If this is the second to last element, set the tail as the next
                if (i + 2 == values.length) {
                    this.tail = nextNode;
                }

                currNode = nextNode;
            }

            this.size = values.length;
        }
    }

    // Prints the linked list
    public print(): void {
        const nodes: T[] = [];
        let nodeString = '';
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
activityList.print();
