import { LinkedList } from "../LinkedList/linkedlist.ts";
import { Task } from "./tasks.ts";

interface ITaskManager {
    tasks: LinkedList<Task>
    addTask(description: string): void;
    deleteTask(index: number): void;
    showTasks(): string;
}

export class TaskManager implements  ITaskManager {
    tasks: LinkedList<Task>;
    constructor(){
        this.tasks = new LinkedList();
    }
    addTask(description: string){
        const task = new Task(description);
        this.tasks.add(task);
    }
    deleteTask(index: number){
        if (!this.tasks.head) return false;

        let currentTask = this.tasks.head
        let i:number = 1;
        while(currentTask?.next && i < index){
            currentTask = currentTask.next;
            i++;
            
        }
        if(i === index){
            this.tasks.delete(currentTask.data);
        }
    }
    showTasks(){
        let currentNode = this.tasks.head;
        let result = "";
        let index:number  = 1;
        while(currentNode){
            result += `${index}.` + currentNode.data.description + "\n";
            currentNode = currentNode.next;
            index++;
        }
        return result;
    }
}