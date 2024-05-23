// Node or null type
type LNodeType<T> = LNode<T> | null;

/** Singly Linked List Node
 * data: this node's data
 * next: pointer to the next node
 */
export class LNode<T> {
    public data: T;
    private next: LNodeType<T>;

    // Initialize with some data
    constructor(val: T) {
        this.data = val;
        this.next = null;
    }

    // Get the next pointer
    public getNext(): LNodeType<T> {
        return this.next;
    }

    // Set the next pointer
    public setNext(newNode: LNodeType<T>) {
        this.next = newNode;
    }
}

/** Singly Linked List Class
 *
 */
export class SinglyLinkedList<T> {
    public head: LNodeType<T>; // head pointer
    public size: number; // linked list size

    // Initialize the list with some data
    constructor(values: T[]) {
        if (values.length != 0) {
            this.head = new LNode(values[0]);
            let currNode: LNode<T> = this.head;

            // Iterate over the second element till the end
            for (let i = 1; i < values.length; i++) {
                const nextNode = new LNode(values[i]);
                currNode.setNext(nextNode);
                currNode = nextNode;
            }

            this.size = values.length;
        }
    }

    // Append to the tail
    public append(val: T): void {
        const newNode = new LNode(val);

        // Edge case: List is empty
        if (!this.head) {
            this.head = newNode;
            this.size += 1;
            return;
        }

        let currNode: LNodeType<T> = this.head;

        // While there's still a next node to consider
        while (currNode && currNode.getNext()) {
            currNode = currNode.getNext();
        }

        this.size += 1;
        currNode?.setNext(newNode);
    }

    // Prepend to the head
    public prepend(val: T): void {
        const newHead = new LNode(val);

        // Edge case: The list is empty
        if (!this.head) {
            this.head = newHead;
            this.size += 1;
            return;
        }

        newHead.setNext(this.head);
        this.head = newHead;

        this.size += 1;
    }

    // Insert in the middle
    public insert(val: T, pos: number) {
        // Edge case: Out of bounds
        if (pos < 1 || pos > this.size + 1) {
            throw new Error('Position out of bounds.');
        }

        // Edge case: If pos == 1, then prepend
        if (pos == 1) {
            this.prepend(val);
            return;
        }

        // Edge case: If pos == size + 1, then append
        if (pos == this.size + 1) {
            this.append(val);
            return;
        }

        let currNode = this.head;
        let i = 1;

        // Just before
        while (i < pos - 1 && currNode) {
            currNode = currNode.getNext();
            i += 1;
        }

        if (currNode) {
            const newNode = new LNode(val);

            newNode.setNext(currNode.getNext()); // new node's next is curr's next
            currNode.setNext(newNode); // curr node's next is the new node

            this.size += 1;
        }
    }

    // Remove from any position
    public remove(pos: number): LNodeType<T> {
        // Edge case: List is empty
        if (!this.head) {
            throw new Error('Cannot remove from an empty list');
        }

        // Edge case: Out of bounds
        if (pos < 1 || pos > this.size) {
            throw new Error(`Out of bounds removal from pos: '${pos}'`);
        }

        let currNode = this.head;
        let i = 1;

        while (i < pos - 1 && currNode) {
            currNode = currNode.getNext()!;
            i += 1;
        }

        const deletedNode = currNode.getNext();
        currNode.setNext(deletedNode?.getNext()!); // set the curr's next to deleted's next

        deletedNode?.setNext(null);
        this.size -= 1;

        return deletedNode;
    }

    // Print the list content
    public print(): void {
        const nodes: T[] = [];
        let nodeString = '';

        let currNode = this.head;

        // While there's a node to consider
        while (currNode) {
            nodes.push(currNode.data);
            nodeString += `${currNode.data} -> `;
            currNode = currNode.getNext();
        }

        nodeString += 'NULL';

        console.log('Size:', this.size);
        console.log('Node array:', nodes);
        console.log('Visualized:', nodeString);
    }
}

const testList = new SinglyLinkedList(['testing', 'this', 'list']);

testList.append('implementation');
testList.prepend("I'm");
testList.insert('currently', 2);
testList.insert('trying', 3);
testList.remove(4); // removes 'testing'

testList.print();
