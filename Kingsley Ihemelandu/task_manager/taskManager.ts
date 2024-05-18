import { LinkedList } from "./linkedList";
import { ITask } from "./types";

class TaskManager extends LinkedList<ITask> {
  completedTasks: CompletedTasks = new CompletedTasks();
  constructor() {
    super();
  }

  addTask(task: ITask) {
    this.add(task);
  }

  private removeTask(task: ITask) {
    this.remove(task);
  }

  completeTask(task: ITask) {
    task.isCompleted = true;
    this.completedTasks.addCompletedTask(task);
    this.removeTask(task);
  }
}

class CompletedTasks extends Stack<ITask> {
  constructor() {
    super();
  }

  addCompletedTask(task: ITask) {
    this.push(task);
  }
}
