import { DoubleLinkedList } from "../../Week6/classworks/doublylinkedlist";



interface Stack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
}

export class StackFromLinkedList<T> implements Stack<T> {
    private linkedList: DoubleLinkedList<T>;

    constructor() {
        this.linkedList = new DoubleLinkedList();
    }

    push(item: T): void {
        this.linkedList.add(item);
    }

    pop(): T | undefined {
        const popped = this.linkedList.delete(-1);
        return popped ? popped.data : undefined
        
    }

    peek(): T | undefined {
        const lastItem = this.linkedList.get(-1)
        return lastItem ? lastItem.data : undefined
    }
}
