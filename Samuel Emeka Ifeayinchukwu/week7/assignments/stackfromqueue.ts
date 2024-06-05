import { Queue } from "../../Week5/classworks/Queue/queue";

interface Stack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
  }

export class StackFromQueue<T> implements Stack<T> {
    private firstqueue: Queue<T>;
    private secondqueue: Queue<T>;

    constructor() {
        this.firstqueue = new Queue();
        this.secondqueue = new Queue();
    }

    push(item: T): void {
        this.firstqueue.enqueue(item); //Add item to the first queue
    }

    pop(): T | undefined {
        while (this.firstqueue.size() > 1) {
            this.secondqueue.enqueue(this.firstqueue.dequeue()!);
        } //This is removing all elements from the first queue and adding them to the second queue until the element at the end is reached
        const item = this.firstqueue.dequeue(); //Last item
        [this.firstqueue, this.secondqueue] = [this.secondqueue, this.firstqueue]; //Make the second queue the main queue and the first queue the subsidiary queue
        return item; //return the item at the top
    }

    peek(): T | undefined {
        while (this.firstqueue.size() > 1) {
            this.secondqueue.enqueue(this.firstqueue.dequeue()!);
        }
        const item = this.firstqueue.dequeue();
        this.secondqueue.enqueue(item!);
        [this.firstqueue, this.secondqueue] = [this.secondqueue, this.firstqueue]; //Replace second queue that is full with first queue that is empty
        return item;
    }
}