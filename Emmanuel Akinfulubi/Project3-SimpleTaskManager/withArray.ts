class Task {
  constructor(
    public id: number,
    public description: string,
    public completed: boolean = false
  ) {}
}

class TaskManager {
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  displayTasks(): void {
    console.log("Tasks:");
    this.tasks.forEach((task) => {
      console.log(
        `[${task.id}] ${task.description} (${
          task.completed ? "Completed" : "Pending"
        })`
      );
    });
  }

  completeTask(taskId: number): void {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = true;
    }
  }
}

const taskManager = new TaskManager();

taskManager.addTask(new Task(1, "Buy groceries"));
taskManager.addTask(new Task(2, "Read a book"));

taskManager.completeTask(1);

taskManager.displayTasks();

taskManager.deleteTask(2);

taskManager.displayTasks();
