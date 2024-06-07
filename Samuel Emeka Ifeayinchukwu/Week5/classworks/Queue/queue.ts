interface IQueue<T> {
    dequeue(): T | undefined;
    enqueue(item: T): T[];
    size(): number
}

export class Queue<T> implements IQueue<T> {
    private storage: Array<T>;
    constructor(private capacity:number = Infinity) {}

    dequeue(): T | undefined {
        const removed = this.storage.shift()
        return removed
    }
    enqueue(item: T): T[] {
        this.storage.push(item)
        return this.storage
    }
    size(){
        return this.storage.length
    }
}