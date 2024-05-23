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
testList.print();
