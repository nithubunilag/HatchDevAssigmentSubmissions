class newNode {
    data: any;
    next: Node | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}
class CircularLinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    // Append a node to the end of the list
    append(data: any): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
        }
    }

    // Prepend a node to the beginning of the list
    prepend(data: any): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Insert a node after a node with the given data
    insertAfter(prevData: any, data: any): void {
        const newNode = new Node(data);
        let temp = this.head;
        if (temp) {
            do {
                if (temp.data === prevData) {
                    newNode.next = temp.next;
                    temp.next = newNode;
                    return;
                }
                temp = temp.next;
            } while (temp !== this.head);
        } else {
            console.log(`Node with data ${prevData} not found.`);
        }
    }

    // Delete a node with the given data
    delete(key: any): void {
        if (!this.head) {
            return;
        }

        // If head node is to be deleted
        if (this.head.data === key) {
            if (this.head.next === this.head) {
                this.head = null; // Only one node in the list
            } else {
                let temp = this.head;
                while (temp.next !== this.head) {
                    temp = temp.next;
                }
                temp.next = this.head.next;
                this.head = this.head.next;
            }
            return;
        }

        // If node to be deleted is not the head
        let curr = this.head;
        let prev: Node | null = null;
        do {
            prev = curr;
            curr = curr.next;
            if (curr && curr.data === key) {
                prev.next = curr.next;
                return;
            }
        } while (curr !== this.head);
    }

    // Display the circular linked list
    display(): void {
        if (this.head) {
            const nodes: any[] = [];
            let temp = this.head;
            do {
                nodes.push(temp.data);
                temp = temp.next;
            } while (temp !== this.head);
            console.log(nodes.join(" -> "));
        } else {
            console.log("The list is empty.");
        }
    }
}

// Example usage:
const cll = new CircularLinkedList();
cll.append(1);
cll.append(2);
cll.append(3);
cll.prepend(0);
cll.insertAfter(1, 1.5);
cll.display();  // Output: 0 -> 1 -> 1.5 -> 2 -> 3
cll.delete(1.5);
cll.display();  // Output: 0 -> 1 -> 2 -> 3
cll.delete(0);
cll.display();  // Output: 1 -> 2 -> 3
cll.delete(3);
cll.display();  // Output: 1 -> 2

