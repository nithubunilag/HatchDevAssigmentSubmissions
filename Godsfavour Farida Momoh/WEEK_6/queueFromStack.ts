interface ImyStack<T>{
  last(): T | undefined;
  remove():T | undefined;
  add(val:T):void;
}

class myStack<T> implements ImyStack<T> {
  storage: Array<T> = [];

  constructor(private capacity: number = Infinity) {}

  last() {
    return this.storage[this.storage.length - 1]; 
  }

  remove(): T | undefined {
    return this.storage.pop();
  }

  add(val: T) {
    if (this.storage.length < this.capacity) {
      this.storage.push(val);
    } else {
      throw new Error("Stack capacity reached");
    }
  }
}



interface IQueue<T> {
  dequeue(): T | undefined;
  enqueue(item: T): T[];
  size(): number
}

class myQueue<T> extends myStack<T> implements IQueue<T> {
  stack1: myStack<T> = new myStack()
  stack2: myStack<T> = new myStack() //first element for FIFO at end
  
  dequeue(): T| undefined{
    if(this.stack2.storage.length == 0){
      while(this.stack1.storage.length > 0){

        let val: T = this.stack1.remove() as T;

        this.stack2.add(val)

      }
    }
    return this.stack2.remove()
  }
  
  enqueue(item: T): T[] {
      this.stack1.add(item)
      return this.storage
  }
  size(){
      return this.stack1.storage.length + this.stack2.storage.length
  }

  show(){
    let queue: Array<T> = [];
    for(let i = this.stack2.storage.length; i >= 0; i--){

      let el: T = this.stack2.storage[i] as T;
      
      if (el != undefined)
        queue.push(el)
    }

    for(let i = 0; i < this.stack1.storage.length; i++){
      
      let el: T = this.stack1.storage[i] as T;
      
      queue.push(el)
    }

    return queue
  }
}

let test = new myQueue()
test.enqueue(5)
test.enqueue(4)
test.enqueue(3)
test.enqueue(2)
test.enqueue(1)
console.log(test.show())
console.log(test.dequeue())
console.log(test.show())
console.log(test.dequeue())
