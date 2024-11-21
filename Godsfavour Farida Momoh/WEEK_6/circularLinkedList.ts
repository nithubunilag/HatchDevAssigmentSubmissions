class newNode<T>{
  data: T;
  next: newNode<T> | null ;

  public constructor(data:T){
    this.data = data;
    this.next = null;
  }
}
  

class CircularLinkedList<T> {
  head: newNode<T> | null;
  length: number = 0;

  constructor() {
    this.head = null;
  }

  add(val: T, pos: number | null = null) {
    const node = new newNode(val);
    this.length += 1;

    if (!this.head) {
      this.head = node;
      this.head.next = this.head;
      return;
    }

    let curr = this.head;
    let count = 0;

    while (curr !== null) {
      if (curr.next === this.head && pos === null) {
        curr.next = node;
        node.next = this.head;
        return;
      }

      if (count === pos) {
        node.next = curr.next;
        curr.next = node;
        return;
      }
      curr = curr.next;
      count += 1;
    }
    return;
  }

  // BETTER SPACE COMPLEXITY 
  printList(n = 1) {
    
    let count = this.length
    
    if (this.head === null) {
      console.log("NO ELEMENT");
      return;
    }

    let curr = this.head;

    while (n > 0) {
      if (curr === this.head) {
        console.log("THIS BEGINS A CYCLE");
      }
      console.log(curr.data);

      if (curr.next === this.head) {
        n -= 1;
      }
      count-=1
      curr = curr.next;
    }
    return;
  }

  toList(){
    let array_ll: Array<T> = [];
    let curr : newNode<T> | null = this.head

    if(!curr){
      return array_ll
    }

    while(curr){
      array_ll.push(curr.data)
      
      if(curr.next == this.head){
        return array_ll
      }

      curr = curr.next
    }
    
  }

  //SAME TIME COMPLEXITY AS printList, WORSE SPACE COMPLEXITY
  printCycle(n = 1){
    let llist = this.toList() as T[];
    
    if (llist?.length == 0){
      return
    }
    while(n > 0){
      console.log("THIS IS A CYCLE")
      
      for(let i = 0; i < llist?.length; i++){
        console.log(llist[i])
      }
      n--
    }
  }

  delete(pos: number = 0) {
    if (this.length === 0) {
      console.log("Linked list contains no elements");
      return;
    }
    if (pos != null && (pos < 0 || pos >= this.length)) {
      console.log("The position you are trying to delete from is invalid");
      return;
    }

    let curr = this.head;
    let prev: newNode<T> | null = null;

    if (pos === 0 || this.length === 1) {
      while (curr!.next !== this.head) {
        curr = curr!.next;
      }
      if (this.length === 1) {
        this.head = null;
      } else {
        curr!.next = this.head!.next;
        this.head = this.head!.next;
      }
    } else {
      let count = 0;
      while (count !== pos) {
        prev = curr;
        curr = curr!.next;
        count += 1;
      }
      prev!.next = curr!.next;
    }
  }

  shuffle(){
    //shuffle uses the Fischer Yutt (Knutt) Algorithm
    if (this.length <= 0)
      return
    
    let llist = this.toList() as T[]; 
    
    let currentIndex = llist.length - 1;
    let randomIndex:number;

    while(currentIndex != 0){
      randomIndex = Math.floor(Math.random() * (currentIndex - 1));

      [llist[currentIndex], llist[randomIndex]] = [llist[randomIndex], llist[currentIndex]];

      currentIndex--;
    }

    let curr = this.head;
    let i = 0;
    
    while(curr){
      curr.data = llist[i]
      
      if(curr.next == this.head){
        return llist 
      }
      
      i++;
      curr = curr.next
    }
    
  }
}

// Example usage
const circular = new CircularLinkedList<number>();
circular.add(3);
circular.add(4);
circular.add(5);
circular.add(2);
console.log(circular.toList());
console.log(circular.shuffle())
