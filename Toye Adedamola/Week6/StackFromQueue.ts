//Make the most recently added element to be at the front - LIFO
class StackFromQueue<T>{
    private queue : T[] = [];

    push(item: T): void{
        const size = this.queue.length;
        this.queue.push(item);

        //Rotate the queue by removing the first element and pushing it to the queue
        for(let i = 0 ; i < size; i++){
            this.queue.push(this.queue.shift()!);
        }
    }

    pop() : T | undefined{
        if(this.queue.length === 0){
            return undefined;
        }

        //Since we've rotated the queue, the first element is now the last element and using LIFO principle
        return this.queue.shift();
    }


    peek() : T | undefined{
        if(this.queue.length === 0){
            return undefined;
        }
        return this.queue[0];
    }

    isEmpty() : boolean{
        return this.queue.length === 0;
    }

    size(): number{
        return this.queue.length;
    }
}

const stack = new StackFromQueue();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Size:", stack.size());
console.log(stack);
console.log("Top element: ",stack.peek() );
stack.pop();
console.log(stack);
console.log("New Top element: ",stack.peek() );
console.log("Size:", stack.size());
console.log("Is the stack empty?", stack.isEmpty());