interface Task {
  id: number;
  name: string;
  completed: boolean;
}

class ListNode {
  task: Task;
  next: ListNode | null = null;

  constructor(task: Task) {
    this.task = task;
  }
}

class LinkedListTaskManager {
  private head: ListNode | null = null;
  private nextId: number = 1;

  addTask(name: string): void {
    const newTask: Task = { id: this.nextId++, name, completed: false };
    const newNode = new ListNode(newTask);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  deleteTask(id: number): void {
    if (!this.head) return;

    if (this.head.task.id === id) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.task.id !== id) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  completeTask(id: number): void {
    let current = this.head;
    while (current) {
      if (current.task.id === id) {
        current.task.completed = true;
        return;
      }
      current = current.next;
    }
  }

  displayTasks(): void {
    console.log("Tasks:");
    let current = this.head;
    while (current) {
      const task = current.task;
      console.log(
        `${task.id}: ${task.name} - ${task.completed ? "Completed" : "Pending"}`
      );
      current = current.next;
    }
  }
}

const linkedListTaskManager = new LinkedListTaskManager();
linkedListTaskManager.addTask("Task A");
linkedListTaskManager.addTask("Task B");
linkedListTaskManager.displayTasks();
linkedListTaskManager.deleteTask(1);
linkedListTaskManager.completeTask(2);
linkedListTaskManager.displayTasks();
