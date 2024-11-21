//  Godsfavour Farida Momoh
// farimomoh@gmail.com
interface IQueue<T> {
  dequeue(): T | undefined;
  enqueue(item: T): T[];
  size(): number
}

class Queue<T> implements IQueue<T> {
  storage: Array<T> = [];
  
  constructor(private capacity:number = Infinity) {
    this.capacity = capacity
  }
  
  dequeue(): T | undefined{
      let remove = this.storage.shift()
      return remove
  }
  enqueue(item: T): T[] {
      this.storage.push(item)
      return this.storage
  }
  size(){
      return this.storage.length
  }
}

class BNode<T>{
  leftPointer: BNode<T> | null;
  data: T;
  rightPointer: BNode<T> | null

  constructor(data:T){
    this.data = data;
    this.leftPointer = null;
    this.rightPointer = null;
  }
  
}
class BinaryTree<T>{
  root: BNode<T> | null;

  constructor(){
    this.root = null
  }
  traversal(){
    let queue = new Queue();
    let result: Array<T> = [];

    queue.enqueue(this.root);
    
    while(queue.size() > 0){
      let curr: BNode<T> = queue.dequeue() as BNode<T>;
      
      if(curr?.leftPointer !== null){
        queue.enqueue(curr?.leftPointer)
      }
      if(curr?.rightPointer !== null){
        queue.enqueue(curr?.leftPointer)
      }


      result.push(curr.data)
      
    }
  }

    preorderArray: T[] = [];
    preorderTraversal(node:BNode<T> | null){

        if (node == null)
            return []

        this.preorderArray.push(node.data)
        this.preorderTraversal(node!.left)
        this.preorderTraversal(node!.right)

        return this.preorderArray;
    }

    
    inorderArray: T[] = [];
    inorderTraversal(node:BNode<T> | null){

        if (node == null)
            return []

        this.inorderTraversal(node!.left)
        this.inorderArray.push(node.data)
        this.inorderTraversal(node!.right)

        return this.inorderArray;
    }

    postorderArray: T[] = [];
    postorderTraversal(node:BNode<T> | null){

        if (node == null)
            return []

        this.postorderTraversal(node!.left)
        this.postorderTraversal(node!.right)
        this.postorderArray.push(node.data)

        return this.postorderArray;
    }
}
