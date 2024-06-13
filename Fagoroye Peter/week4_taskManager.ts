class Tasks{
    data: string;
    next: Tasks;

    constructor(val: string ){
        this.data = val;
    }
}
class TaskManager{
    head: Tasks
    size: number;

    addTasks(val: string){
        const newTask = new Tasks(val)

        // if we don't have "any task"
        if (!this.head){
            this.head =  newTask;
            return;
        }

        // if we have "tasks"
        let currentTask = this.head;
        while(currentTask.next != undefined){
            currentTask = currentTask.next
        } 

        currentTask.next = newTask; 
                       
    }

    search(val: string){
        if(!this.head){
            console.log("No tasks available");
            return;
        }
        let currentTask = this.head;
        let position = 0;

        while(currentTask){
            if(currentTask.data == val){
                console.log(`Found at position ${position}`)
                return;
            }
            position ++;
            currentTask = currentTask.next
        }
        console.log("Task not found");

    }

    removeAt(position){
        if(position < 0 || position >= this.size){     // if user tries to remove a task that is not in the task manager
            return;
        }

        let currentTask = this.head;
        let previousTask;
        let count = 0;

        if(position === 0){    // if user wants to remove first task
            this.head = currentTask.next;
        }else{
            while(count < position){
                count++;
                previousTask = currentTask;
                currentTask = currentTask.next;
            }

            previousTask.next = currentTask.next;
        }

        this.size--;
    }

    // if user whants to clear all the task in task manager
    clearTask(){
        !this.head;
        this.size = 0;
        console.log("The The task has been cleared");
    }

    // if user wants to display all the task in the task manager
    displayTask(){
        let tasks: string[] = [];
        
        if(!this.head){
            return;
        }
        
        let currentTask: Tasks | null = this.head;
        while (currentTask) {
            tasks.push(currentTask.data);
            currentTask = currentTask.next;
        }

        return tasks;
    } 
} 

const myTask = new TaskManager();
myTask.addTasks("wash plates");
myTask.addTasks("do ansys");
myTask.addTasks("cook");
myTask.addTasks("learn DSA");

console.log(myTask.displayTask());
//console.log(myTask);b