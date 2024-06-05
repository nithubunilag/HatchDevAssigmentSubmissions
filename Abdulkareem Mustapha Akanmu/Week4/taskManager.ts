/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class Task {
  id: number;
  description: string;

  constructor(id: number, description: string) {
      this.id = id;
      this.description = description;
  }
}


class TLNode<T> {
  data: T;
  next: TLNode<T> | null = null;

  constructor(value: T) {
      this.data = value;
  }
}

class TaskLinkedList<T> {
  head: TLNode<T> | null = null;

  add(value: T): void {
      const newTLNode = new TLNode(value);
      if (this.head === null) {
          this.head = newTLNode;
      } else {
          let current = this.head;
          while (current.next !== null) {
              current = current.next;
          }
          current.next = newTLNode;
      }
  }

  delete(id: number): void {
      if (this.head === null) return;

      if ((this.head.data as any).id === id) {
          this.head = this.head.next;
          return;
      }

      let current = this.head;
      while (current.next !== null) {
          if ((current.next.data as any).id === id) {
              current.next = current.next.next;
              return;
          }
          current = current.next;
      }
  }

  display(): void {
      let current = this.head;
      while (current !== null) {
          console.log(`Task ID: ${(current.data as any).id}, Description: ${(current.data as any).description}`);
          current = current.next;
      }
  }
}

class TaskManager {
  private arrayTasks: Task[] = [];
  private linkedListTasks: TaskLinkedList<Task> = new TaskLinkedList();
  private idCounter: number = 1;

  addTask(description: string, useArray: boolean = true): void {
      const task = new Task(this.idCounter++, description);
      if (useArray) {
          this.arrayTasks.push(task);
      } else {
          this.linkedListTasks.add(task);
      }
  }

  deleteTask(id: number, useArray: boolean = true): void {
      if (useArray) {
          this.arrayTasks = this.arrayTasks.filter(task => task.id !== id);
      } else {
          this.linkedListTasks.delete(id);
      }
  }

  displayTasks(useArray: boolean = true): void {
      if (useArray) {
          this.arrayTasks.forEach(task => {
              console.log(`Task ID: ${task.id}, Description: ${task.description}`);
          });
      } else {
          this.linkedListTasks.display();
      }
  }
}

const taskManager = new TaskManager();

taskManager.addTask('Do DoublyLinked List', true);
taskManager.addTask('Revise OOP', true);
taskManager.displayTasks(true);
console.log('---');
taskManager.deleteTask(1, true);
taskManager.displayTasks(true);

console.log('==================');

taskManager.addTask('Complete assignment', false);
taskManager.addTask('Read Java book', false);
taskManager.displayTasks(false);

console.log('==================');

taskManager.deleteTask(2, false);
taskManager.displayTasks(false);


