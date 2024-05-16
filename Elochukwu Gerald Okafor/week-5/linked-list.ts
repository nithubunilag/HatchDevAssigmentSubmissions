type NodeType<T> = LNode<T> | null;

// Linked List Node
class LNode<T> {
    public data: T;
    public next: LNode<T>;

    // Initialize the linked list with a value
    constructor(val: T) {
        this.data = val;
    }

    // Set the next node
    setNext(nextNode: LNode<T>): void {
        this.next = nextNode;
    }
}

class LinkedList<T> {
    private head: NodeType<T>;

    // Initialize the linked list with default values
    constructor(initial: T[] = []) {
        if (initial.length > 0) {
            this.head = new LNode(initial[0]);
            let curr = this.head;

            // Link the remaining nodes
            for (let i = 1; i < initial.length; i++) {
                curr.setNext(new LNode(initial[i]));
                curr = curr.next;
            }
        }
    }

    // Returns if the linked list is empty
    public isEmpty(): boolean {
        return !this.head;
    }

    // Insert a new node at the head
    public prepend(val: T): void {
        const newNode = new LNode(val);

        if (this.head) {
            newNode.setNext(this.head);

            this.head = newNode;
            return;
        }

        this.head = newNode;
    }

    // Find the index of a node in the linked list
    public find(val: T): number {
        if (!this.isEmpty()) {
            let curr = this.head;
            let idx = 0;

            while (curr) {
                if (curr.data == val) return idx;

                idx += 1;
                curr = curr.next;
            }
        }

        return -1;
    }

    // Iterate the items in the linked list
    public iterate(): void {
        if (this.isEmpty()) {
            return;
        }

        let curr = this.head;
        let linkedList = '';

        while (curr) {
            linkedList += `${curr.data} -> `;
            curr = curr.next;
        }

        linkedList += 'NULL';
        console.log(linkedList);
    }
}

const list = new LinkedList<string>(['second', 'third']);
const target = 'first';

list.prepend('first');
list.prepend('zero');
list.prepend('minus-one');

list.iterate();

console.log('index of:', target, list.find(target)); // should return 2
console.log('index of twenty:', list.find('twenty')); // returns -1
