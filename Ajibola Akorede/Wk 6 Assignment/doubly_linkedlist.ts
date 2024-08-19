class LNode<T> {
    data: T;
    next: LNode<T>;
    prev: LNode<T>;
  
    constructor(val: T) {
      this.data = val;
    }
  }

  class doubleLinkedList<T> {
    head: LNode<T>;
  
    add(val: T, position?: number) {
      const newNode = new LNode(val);
      //If we don't have 'head
      if (!this.head) {
        this.head = newNode;
        return;
      }
      if (position === undefined || position < 0) {
        // Insert at the end
        let currentNode = this.head;
        while (currentNode.next != null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        newNode.prev = currentNode;
      } else if (position === 0) {
        // Insert at the head
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      } else {
        // Insert at the specified position
        let currentNode = this.head;
        for (let i = 1; i < position - 1 && currentNode.next != null; i++) {
          currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        if (currentNode.next) {
          currentNode.next.prev = newNode;
        }
        currentNode.next = newNode;
        newNode.prev = currentNode;
      }
    }
  
    print() {
      const listArray: T[] = [];
  
      if (!this.head) {
        return [];
      }
  
      let currentNode = this.head;
      while (currentNode != undefined) {
        listArray.push(currentNode.data);
        currentNode = currentNode.next;
      }
  
      return listArray;
    }
    delete(index: number) {
      if (index === undefined || index < 0) {
        console.log('Invalid Index');
        return;
      }
  
      if (!this.head) {
        console.log('List is empty');
        return;
      }
  
      if (index === 0) {
        // Delete the head node
        if (this.head.next) {
          this.head = this.head.next;
          // this.head.prev = null;
        } else {
          // this.head = null;
        }
        return;
      }
  
      let currentNode = this.head;
      for (let i = 0; i < index && currentNode.next != null; i++) {
        currentNode = currentNode.next;
      }
  
      if (!currentNode) {
        console.log('Index out of range');
        return;
      }
  
      if (currentNode.prev) {
        currentNode.prev.next = currentNode.next;
      }
  
      if (currentNode.next) {
        currentNode.next.prev = currentNode.prev;
      }
    }
  }
  
  
  const l = new doubleLinkedList<number>();
  l.add(12);
  l.add(7);
  l.add(5);
  l.add(3, 2);
  l.add(1, 3);
  l.delete(2);
  
  console.log(l);
  console.log(l.print());