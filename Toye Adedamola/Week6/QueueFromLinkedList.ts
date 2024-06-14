class QNode<T>{
    data: T;
    next : QNode<T> | null;

    constructor(data: T){
        this.data = data;
    }
}

class QueueFromLinkedList<T>{
    private head: QNode<T> | null;
    private tail: QNode<T> | null;
    private length : number = 0;

    //Append an element
    enqueue(data:T): void{
        const new_node: QNode<T> = new QNode(data);

        //If list is empty , make the new node the head
        if(!this.head){
            this.head = new_node;
            return;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = new_node;
        } 
    }

    //Remove and return the element at the beginning
    dequeue() : T | undefined{
        if(!this.head){
            return undefined;
        }
        const data  = this.head.data;
        this.head = this.head.next;
        return data;
    }

    size(): number{
        let current = this.head;
        let count = 0;

        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    isEmpty(): boolean{
        return this.head == null; 
    }
}

const myLqueue = new QueueFromLinkedList();
myLqueue.enqueue(30);
myLqueue.enqueue(50);
myLqueue.enqueue(70);
myLqueue.enqueue(90);

console.log("Size of the queue : ", myLqueue.size());
console.log("Dequeued : ", myLqueue.dequeue());
console.log("Size of the queue : ", myLqueue.size());
console.log("Is the queue empty? ", myLqueue.isEmpty());
console.log("Dequeued : ", myLqueue.dequeue());
console.log("Dequeued : ", myLqueue.dequeue());
console.log("Dequeued : ", myLqueue.dequeue());
console.log("Is the queue empty? ", myLqueue.isEmpty());