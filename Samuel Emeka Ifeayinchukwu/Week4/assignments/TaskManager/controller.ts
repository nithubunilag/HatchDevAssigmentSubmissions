import { TaskManager } from "./manager.ts";

const taskManager = new TaskManager();
taskManager.addTask("Buy Milk");
taskManager.addTask("Buy Sugar");
taskManager.addTask("Buy Bread");


taskManager.deleteTask(2)
console.log(taskManager.showTasks());
