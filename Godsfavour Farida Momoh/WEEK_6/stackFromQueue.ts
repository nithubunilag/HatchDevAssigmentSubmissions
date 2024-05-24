interface IQueue<T> {
    enqueue(item: T): T[];
    dequeue(): T | undefined;
    size(): number;
  }

  interface ImyStack<T> {
    add(val: T): void;
    last(): T | undefined;
    remove(): T | undefined;
  }

  class myQueue<T> implements IQueue<T> {
    storage: Array<T> = [];

    constructor(private capacity: number = Infinity) {
      this.capacity = capacity;
    }

    enqueue(item: T): T[] {
      if (this.size() < this.capacity) {
        this.storage.push(item);
        return this.storage;
      } else {
        throw new Error("Queue capacity reached");
      }
    }

    dequeue(): T | undefined {
      return this.storage.shift();
    }

    size(): number {
      return this.storage.length;
    }
  }

  class myQStack<T> extends myQueue<T> implements ImyStack<T> {
    add(val: T): void {
      this.enqueue(val);
    }

    last(): T | undefined {
      return this.storage[this.size() - 1];
    }

    remove(): T | undefined {
      return this.storage.pop();
    }
  }

  let test = new myQStack<number>();
  test.enqueue(1);
  test.add(2);
  console.log(test.last()); 
  console.log(test.storage); 
