import Task from "./Task.ts";
import TaskManager from "./TaskManager.ts";
import { getUserChoice, createNewTask } from "./utils.ts";


const taskManager = new TaskManager();
taskManager.addTask(new Task(
    "Go shopping"
));
taskManager.addTask(new Task(
    "Finish project",
    undefined,
    new Date('May 17, 2024')
));

while (true) {
    taskManager.display();
    const choices = taskManager.tasks.map(task => {
        return `Mark "${task.title}" as done`;
    });

    console.log();

    const i = getUserChoice(["Add a new task", ...choices]);
    if (i === 1) taskManager.addTask(createNewTask());
    else {
        const task = taskManager.tasks[i - 2];
        taskManager.delete(task);
    }
}