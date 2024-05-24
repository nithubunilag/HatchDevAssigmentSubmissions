class Task {
  constructor(
    public id: number,
    public description: string,
    public completed: boolean = false
  ) {}
}

class TaskNode {
  public next: TaskNode | null = null;

  constructor(public task: Task) {}
}

class LinkedList {
  private head: TaskNode | null = null;

  addTask(task: Task): void {
    const newNode = new TaskNode(task);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  deleteTask(taskId: number): void {
    if (!this.head) {
      return;
    }
    if (this.head.task.id === taskId) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.task.id === taskId) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  displayTasks(): void {
    console.log("Tasks:");
    let current = this.head;
    while (current) {
      console.log(
        `[${current.task.id}] ${current.task.description} (${
          current.task.completed ? "Completed" : "Pending"
        })`
      );
      current = current.next;
    }
  }
}

const tasks = new LinkedList();

tasks.addTask(new Task(1, "Buy groceries"));
tasks.addTask(new Task(2, "Read a book"));

tasks.displayTasks();

tasks.deleteTask(1);

tasks.displayTasks();
