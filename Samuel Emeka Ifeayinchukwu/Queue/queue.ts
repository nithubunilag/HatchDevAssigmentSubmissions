interface IQueue<T> {
    dequeue(): T[] | undefined;
    enqueue(item: T): T[];
    size(): number
}

class Queue<T> implements IQueue<T> {
    private storage: Array<T>;
    constructor(private capacity:number = Infinity) {}

    dequeue(): T[]{
        this.storage.shift()
        return this.storage
    }
    enqueue(item: T): T[] {
        this.storage.push(item)
        return this.storage
    }
    size(){
        return this.storage.length
    }
}