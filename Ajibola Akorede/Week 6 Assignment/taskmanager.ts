class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T, next: ListNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    add(data: T): void {
        const newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    delete(index: number): void {
        if (index < 0) {
            console.log("Invalid index");
            return;
        }

        if (this.head === null) {
            console.log("No elements to delete");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous: ListNode<T> | null = null;
        let i = 0;

        while (current !== null && i < index ) {
            previous = current;
           current = current.next!;
           i++;
        }

        if (current === null) {
            console.log("Invalid index");
        } else {
            previous!.next = current.next;
        }
    }

    display(): void {
        console.log("Tasks:");
        let current = this.head;
        let index = 1;
        while (current !== null) {
            console.log(`${index}. ${current.data}`);
            current = current.next;
            index++;
        }
    }
}

// Example usage:
const taskManager = new LinkedList<string>();
taskManager.add("Clean the house");
taskManager.add("Go for a walk");
taskManager.add("Finish homework");
taskManager.display();
taskManager.delete(1);
taskManager.display();
