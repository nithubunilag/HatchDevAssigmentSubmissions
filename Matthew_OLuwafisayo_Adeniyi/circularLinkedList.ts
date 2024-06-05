class CLNode<T> {
    data: T;
    next: CLNode<T> | null;
  
    constructor(val: T) {
      this.data = val;
      this.next = null;
    }
  }
  
  class CircularLinkedList<T> {
    head: CLNode<T> | null = null;
  
    add(newValue: T, position?: number) {
      const newNode = new CLNode(newValue);
  
      if (!this.head) {
        this.head = newNode;
        this.head.next = this.head;
        return;
      }
  
      if (position === 1) {
        this.addAtBeginning(newValue);
        return;
      }
  
      if (position && position > 1) {
        this.addAtPosition(newValue, position);
        return;
      }
  
      this.addAtEnd(newValue);
    }
  
    private addAtBeginning(value: T) {
      const newNode = new CLNode(value);
      newNode.next = this.head;
  
      if (this.head) {
        let current: CLNode<T> = this.head;
        while (current.next && current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
      }
  
      this.head = newNode;
    }
  
    private addAtEnd(value: T) {
      const newNode = new CLNode(value);
  
      if (this.head) {
        let current: CLNode<T> = this.head;
        while (current.next && current.next !== this.head) {
          current = current.next;
        }
  
        current.next = newNode;
        newNode.next = this.head;
      }
    }
  
    private addAtPosition(value: T, position: number) {
      const newNode = new CLNode(value);
  
      if (this.head) {
        let current: CLNode<T> = this.head;
        let index: number = 1;
  
        while (current.next && current.next !== this.head && index < position - 1) {
          current = current.next;
          index++;
        }
  
        if (index === position - 1) {
          newNode.next = current.next;
          current.next = newNode;
        }
      }
    }
  
    delete(value: T) {
      if (!this.head) return;
  
      if (this.head.data === value) {
        if (this.head.next === this.head) {
          this.head = null;
        } else {
          let current: CLNode<T> = this.head;
          while (current.next && current.next !== this.head) {
            current = current.next;
          }
          current.next = this.head.next;
          this.head = this.head.next!;
        }
        return;
      }
  
      let current: CLNode<T> = this.head;
      while (current.next && current.next !== this.head && current.next.data !== value) {
        current = current.next;
      }
  
      if (current.next && current.next.data === value) {
        current.next = current.next.next;
      }
    }

  }

  const circularLinkedList = new CircularLinkedList<number>();
  
  circularLinkedList.add(1);
  circularLinkedList.add(2);
  circularLinkedList.add(3);
  circularLinkedList.add(4);
  circularLinkedList.delete(4);

  
  console.log(circularLinkedList);
  