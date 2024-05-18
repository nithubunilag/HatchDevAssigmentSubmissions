import { LinkedList } from "./linkedList";


export interface ITask {
  title: string;
  priority: number;
  isCompleted: boolean;
  dueDate: Date | string;
}

export interface ITaskManager {
    tasks: LinkedList<ITask>
    addTask(description: string): void;
    deleteTask(index: number): void;
    showTasks(): string;
}