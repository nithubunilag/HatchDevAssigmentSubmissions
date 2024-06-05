//Use enqueue stack to add to the queue
//Use dequeue stack to remove to the queue

class QueueFromStack<T>{
    private enqueueStack : T[] =[];
    private dequeueStack: T[] = [];

    enqueue(item: T) : void{
        //Push 
        this.enqueueStack.push(item);
    }

    //Removing from the front
    dequeue() : T | undefined{
        //If dequeue stack is empty , transfer the elements from enqueue stack
        //If both the dequeue stack and enqueue stack are empty, return undefined
        if(this.dequeueStack.length === 0 ){
            if(this.enqueueStack.length === 0){
                return undefined;
            }

            while(this.enqueueStack.length > 0){
                this.dequeueStack.push(this.enqueueStack.pop()!);
            }
        }
        return this .dequeueStack.pop();
    }

    isEmpty() : boolean{
        return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
    }

    size() : number{
        return this.enqueueStack.length + this.dequeueStack.length;
    }
}


const queue = new QueueFromStack();
queue.enqueue(30);
queue.enqueue(50);
queue.enqueue(70);
queue.enqueue(90);

console.log("Size of the queue : ", queue.size());
console.log("Dequeued : ", queue.dequeue());
console.log("Size of the queue : ", queue.size());
console.log("Is the queue empty? ", queue.isEmpty());