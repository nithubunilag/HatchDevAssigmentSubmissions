import { DoubleLinkedList } from "../../Week6/classworks/doublylinkedlist";

interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
}

export class QueueFromLinkedList<T> implements Queue<T> {
    private linkedList: DoubleLinkedList<T>;

    constructor() {
        this.linkedList = new DoubleLinkedList();
    }

    enqueue(item: T): void {
        this.linkedList.add(item);
    }

    dequeue(): T | undefined {
        const dequeued = this.linkedList.delete(0);
        return dequeued ? dequeued.data : undefined;
    }

    peek(): T | undefined {
        const firstItem = this.linkedList.get(0);
        return firstItem ? firstItem.data : undefined;
    }
}