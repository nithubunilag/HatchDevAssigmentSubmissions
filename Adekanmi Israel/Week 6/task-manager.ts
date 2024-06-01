class TaskObject {
  description: string;
  progress: "PENDING" | "IN PROGRESS" | "COMPLETED";

  constructor(
    description: string,
    progress: "PENDING" | "IN PROGRESS" | "COMPLETED"
  ) {
    this.description = description;
    this.progress = progress;
  }
}

class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T, next: ListNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class TaskList {
  private head: ListNode<TaskObject> | null;

  constructor() {
    this.head = null;
  }

  add(data: TaskObject): void {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  delete(index: number): void {
    if (index < 0) {
      console.log("Invalid index");
      return;
    }

    if (this.head === null) {
      console.log("No elements to delete");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous: ListNode<TaskObject> | null = null;
    let i = 0;

    while (current !== null && i < index) {
      previous = current;
      current = current.next!;
      i++;
    }

    if (current === null) {
      console.log("Invalid index");
    } else {
      previous!.next = current.next;
    }
  }

  updateTask(
    index: number,
    newProgress: "PENDING" | "IN PROGRESS" | "COMPLETED"
  ): void {
    if (index < 0) {
      console.log("Invalid index");
      return;
    }

    let current = this.head;
    let i = 0;

    while (current !== null && i < index) {
      current = current.next;
      i++;
    }

    if (current === null) {
      console.log("Invalid index");
    } else {
      current.data.progress = newProgress;
    }
  }

  display(): void {
    console.log("Tasks:");
    let current = this.head;
    let index = 1;
    while (current !== null) {
      console.log({
        taskNo: index,
        description: current.data.description,
        progress: current.data.progress,
      });
      current = current.next;
      index++;
    }
  }
}

// Example usage:
const taskManager = new TaskList();
taskManager.add(new TaskObject("Write my lab report", "PENDING"));
taskManager.add(new TaskObject("Learn Programming", "PENDING"));
taskManager.add(new TaskObject("Study the word", "PENDING"));

//Display my tasks
taskManager.display();

//Update two of my tasks
taskManager.updateTask(1, "IN PROGRESS");
taskManager.updateTask(2, "COMPLETED");

//Display new task progress
console.log("Updated task info: ");
taskManager.display();

//Delete a task
taskManager.delete(1);

//Display
console.log("Task Info After Deletion: ");
taskManager.display();
