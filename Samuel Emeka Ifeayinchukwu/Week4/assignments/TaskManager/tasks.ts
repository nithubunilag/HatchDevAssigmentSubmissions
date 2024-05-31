interface ITask {
    description: string;
    completed: boolean;
  }

export class Task implements ITask {
    description: string;
    completed: boolean;

    constructor(description: string) {
        this.description = description;
        this.completed = false;
    }
}