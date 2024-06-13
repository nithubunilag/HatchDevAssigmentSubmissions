interface Queue<T>{
    enqueue(item: T): void;
    dequeue(): T | undefined;
}


class stackQueue<T> implements Queue<T>{
    private queue: T[] = []

    constructor(private capacity: number = Infinity){
    }
    private count: number = 0;

    // 
    enqueue(item: T): void {
        // if user adds to a stack that is full
        if(this.size() >= this.capacity){
            return console.log("the stack is full");
        }
        this.queue.push(item);
        this.count++;
    }


    // creating a method that pushes item into the stack
    push(item){
        let rotate = this.count;
        this.enqueue(item);
        // the while loop enqueue a dequeue stack, thereby rotating the valeus making the first, last and last first
        while(rotate > 0){
            this.enqueue(this.dequeue()!);
            rotate--;
        }
    }

    // craeting a dequeue method that removes the first value 
    dequeue(): T | undefined {
        if (this.count === 0) {
            console.log("The stack is empty");
            return undefined;
        }
        this.count--;
        return this.queue.shift();
    }

    // creating a method to remove the last element 
    pop(){
        return this.dequeue();
    }

    // clears all the value in the stack
    clear(){
        return this.count === 0;
    }

    size(): number {
        return this.count;
    }

    display(): void {
        console.log('Current stack1 items:', this.queue);
    }
    
}

const sq = new stackQueue();

sq.push(2);
sq.push(4);
sq.push(6);
sq.push(8);
console.log(sq.size());   // Output is "4"

sq.display();   // Output is "Current stack1 items: [ 8, 6, 4, 2 ]"
sq.pop();   // removes "8"

sq.display();     // Output is "Current stack1 items: [ 6, 4, 2 ]"