// Creating the stack interface
interface Stack<T>{ 
    push(item: T): void; 
}

// creating the class for the converted stack to queue
class queueStack<T> implements Stack<T>{
    private stack1: T[] = [];   // stack 1 that accepts the values
    private stack2: T[] = [];   // stack 2 that accepts the popped value from stack 1
    

    constructor(private capacity: number = Infinity){}
    private count: number = 0;

    // creating a push method that add values to stack 1
    push(item: T): void {
        this.stack1.push(item);
    }

    // creating the enqueue method that takes the calls the push method to add to the stack
    enqueue(item: T){
        this.push(item);
        this.count++; 
    }

    // creating the push2 method that adds the popped value from stask 1 to stack 2
    push2(item: T){
        this.stack2.push(item);
    }

    // creating the dequeue method 
    dequeue(){
        // if user tries to remove from an empty queue or stack
        if(this.size() == 0){
            return console.error("the queue is empty");
        }else{
            for(let i = 0; i < this.count; i++){
                let storage: T | undefined;
                storage  = this.stack1.pop();
                this.push2(storage!)
            }
            let storage2 = this.stack2.pop();
            console.log(`The dequeued item is ${storage2}`);
            this.count--;
            for(let i = 0; i < this.count; i++){
                let st =this.stack2.pop();
                this.stack1.push(st!);
            }
        }
    }

    size(): number {
        return this.count;
    }

    // craeting the method to display all values in the queue
    display(): void {
        console.log('Current stack1 items:', this.stack1);
    }
}

const qu = new queueStack();    // instantiating the class queueStack
qu.enqueue(3);
qu.enqueue(5);
qu.enqueue(7);
qu.enqueue(11);
qu.display();   // output is [3, 5, 7, 11]

qu.dequeue();    // output is "The dequeued item is 3"
qu.display();   // output is  "[5, 7, 11]"
