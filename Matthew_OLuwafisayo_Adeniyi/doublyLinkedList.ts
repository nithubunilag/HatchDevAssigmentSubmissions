class ListNode<T> {
    prev: ListNode<T> | null = null;
    data: T | null = null;
    next: ListNode<T> | null = null;
  
    constructor(val: T) {
      this.data = val;
    }
  }
  
  class DoublyLinkedList<T> {
    head: ListNode<T> | null = null;
  
    add(newValue: T, position?: number) {
      const newNode = new ListNode(newValue);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
  
      currentNode.next = newNode;
      newNode.prev = currentNode;
    }
  
    private addToBeginning(value: T) {
      const newNode = new ListNode(value);
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    }
  
    addAtPosition(value: T, position: number) {
      if (position === 1) {
        this.addToBeginning(value);
        return;
      }
  
      const newNode = new ListNode(value);
      let currentNode = this.head;
      let index = 1;
  
      while (currentNode && index < position - 1) {
        currentNode = currentNode.next!;
        index++;
      }
  
      if (currentNode && currentNode.next) {
        newNode.next = currentNode.next;
        newNode.prev = currentNode;
        currentNode.next.prev = newNode;
        currentNode.next = newNode;
      } else if (currentNode) {
        currentNode.next = newNode;
        newNode.prev = currentNode;
      }
    }
  
    delete(value: T) {
      if (!this.head) return;
  
      if (this.head.data === value) {
        if (this.head.next) {
          this.head = this.head.next;
          this.head.prev = null;
        } else {
          this.head = null;
        }
        return;
      }
  
      let currentNode = this.head;
  
      while (currentNode && currentNode.data !== value) {
        currentNode = currentNode.next!;
      }
  
      if (currentNode) {
        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        }
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        }
      }
    }
  }
  
  const doublyLinkedList = new DoublyLinkedList<number>();
  doublyLinkedList.add(9);
  doublyLinkedList.add(2);
  doublyLinkedList.delete(2);
  doublyLinkedList.add(3);
  console.log(doublyLinkedList);
  