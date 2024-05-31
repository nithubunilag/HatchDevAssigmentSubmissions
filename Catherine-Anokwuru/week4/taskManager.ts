class Task {
  constructor(
    public id: number,
    public title: string,
    public description: string
  ) {}
}

class ListNode {
  constructor(
    public task: Task,
    public next: ListNode | null = null
  ) {}
}

class TaskManager {
  private head: ListNode | null = null;
  private size: number = 0;

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  addTask(task: Task): void {
    const newNode = new ListNode(task);
    newNode.task.id = this.size + 1;
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current && current.next) {
        current = current.next;
      }
      if (current) {
        current.next = newNode;
      }
    }
    this.size++;
  }

  insert(task: Task, index: number): void {
    if (index < 0 || index > this.size) {
      return;
    }
    const newNode = new ListNode(task);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      // this.addTask(task)
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      newNode.next = current!.next;
      current!.next = newNode;
    }
    this.size++;

    let current = this.head;
    let currentIndex = 0;
    while (current) {
      current.task.id = currentIndex + 1;
      current = current.next;
      currentIndex++;
    }
  }

  deleteTask(index: number): Task | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removedTask: Task | null = null;

    if (index === 0) {
      removedTask = this.head!.task;
      this.head = this.head!.next;
    } else {
      let prev = this.head!;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next!;
      }
      removedTask = prev.next!.task;
      prev.next = prev.next!.next;
    }

    let current = this.head;
    let currentIndex = 0;
    while (current) {
      current.task.id = currentIndex + 1;
      current = current.next;
      currentIndex++;
    }

    this.size--;
    return removedTask;
  }

  displayTasks(): void {
    if (this.isEmpty()) {
      console.log("No tasks");
      return;
    }

    let current = this.head;
    while (current) {
      console.log(
        `${current.task.id}. ${current.task.title} \n${current.task.description}`
      );
      current = current.next;
    }
  }
}

const taskManager = new TaskManager();

taskManager.addTask(
  new Task(
    1,
    "Complete TypeScript tutorial",
    "I should watch the last video to complete the typescript tutorial"
  )
);
taskManager.addTask(
  new Task(
    2,
    "Write a blog post",
    "I should work on my draft and finish blog post"
  )
);
taskManager.addTask(
  new Task(
    3,
    "Prepare presentation slides",
    "Work on slides to present to the client"
  )
);

console.log("Tasks:");
// taskManager.displayTasks();

taskManager.insert(
  new Task(1, "Job search", "Accept job offer before noon"),
  5
);
taskManager.displayTasks();

// taskManager.deleteTask(2);
// console.log("\nDeleted sucessfully");
// taskManager.displayTasks();
