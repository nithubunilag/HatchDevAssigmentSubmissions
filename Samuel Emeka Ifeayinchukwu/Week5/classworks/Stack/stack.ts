interface IStack<T> {
    push(element: T): void;
    pop(): T | undefined;
    peek(): T | undefined ;
    size(): number;
}

export default class Stack<T> implements IStack<T> {
    private storage: T[] = [];
    constructor(private capacity:number = Infinity) {}
    public push(element: T){
        if (this.storage.length < this.capacity){
            this.storage.push(element);
        }
    }
    public pop(){
        const popped = this.storage.pop()
        return popped
    }
    public peek(){
        return this.storage[this.size() - 1]
    }
    public size(){
        return this.storage.length
    }
    public data() {
        return [...this.storage];
    }
}
