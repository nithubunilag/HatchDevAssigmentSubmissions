class LNode<T> {
    data: T;
    next?: LNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

export default class LinkedList<T> {
    head?: LNode<T>;

    /**
     * Adds a value to the linked list. Appends if position is more than list size.
     * 
     * @param data - The value to insert into the linked listt
     * @param position - Optional. The position to add into (starts from 1)
     */
    add(data: T, position?: number) {
        const newNode = new LNode(data);

        // if we have a head node
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // if position is 1, insert as head
        if (position !== undefined && position <= 1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        // if we don't have a head node
        let currentPosition = 1;
        let currentNode = this.head;
        while (currentNode.next) {
            if (position && currentPosition === position-1) break;
            currentNode = currentNode.next;
            currentPosition++;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    isEmpty() {
        return !this.head;
    }

    toArray() {
        if (!this.head) return [];
        const arr: T[] = [];

        let currentNode: LNode<T> | undefined = this.head;
        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return arr;
    }

    length() {
        if (!this.head) return 0;
        let length = 0;

        let currentNode: LNode<T> | undefined = this.head;
        while (currentNode) {
            length += 1;
            currentNode = currentNode.next;
        }

        return length;
    }

    filter(predicate: (value: T) => boolean, thisArg?: any): T[] {
        if (!this.head) return [];
        const out: T[] = [];

        let currentNode: LNode<T> | undefined = this.head;
        while (currentNode) {
            if (predicate(currentNode.data)) out.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return out;
    }

    delete(value: T) {
        if (!this.head) return;

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let currentNode: LNode<T> | undefined = this.head;
        while (currentNode.next) {
            if (currentNode.next.data === value) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }

        throw Error("Could not delete " + value);
    }
}