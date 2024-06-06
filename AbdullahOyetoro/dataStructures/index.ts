//Implement a stack from a queue

class Stack<T>{
  stack:T[];
  constructor(){
    this.stack = []
  }
  add(val:T){
    this.stack.push(val)
  }
  remove(){
    return this.stack.pop()
  }
  peek(){
    return this.stack[this.stack.length-1]
  }
}

class Queue<T>{
  queue:T[];
  constructor(){
    this.queue = []
  }
  enqueue(val:T){
    this.queue.push(val)
  }
  dequeue(){
    return this.queue.shift()
  }
}

class LinkedListNode<T>{
  data:T;
  next:LinkedListNode<T>|null;
  constructor(val:T){
    this.data =val;
    this.next = null;
  }
}

class LinkedList<T>{
  head:LinkedListNode<T>
  private getcurrentNode(position?){
    if (!this.head){
      return null
    }
    if(!position){
      
    }
  }
}