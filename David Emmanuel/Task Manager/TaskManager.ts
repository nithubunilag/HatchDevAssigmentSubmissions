import Task from './Task.ts';
import LinkedList from './LinkedList.ts';


export default class TaskManager {
  private _tasks: LinkedList<Task>;

  constructor() {
    this._tasks = new LinkedList<Task>();
  }

  get tasks(): Task[] {
    return this._tasks.toArray();
  }

  delete(task: Task) {
    try {
      this._tasks.delete(task);
    } catch (e) {
      throw Error(`Could not delete task: "${task.title}"`);
    }
  }

  addTask(task: Task) {
    this._tasks.add(task);
  }

  printSummary() {
    const lateCount = this._tasks.filter(task => task.isLate()).length;

    if (this._tasks.isEmpty()) console.log("You're up to date");
    else console.log(`You have ${this._tasks.length()} uncompleted tasks`);
    if (lateCount > 0) console.log(lateCount, "tasks are behind deadline");
  }

  display() {
    console.log('----------------------------------------');

    if (this._tasks.length() > 0) {
      console.log("PENDING:");
      this._tasks.toArray().forEach((task, i) => {
        task.display(i + 1);
      });
    }
    else {
      console.log("No pending tasks");
    }
  }
}
