interface ATask{
    id: number;
    description: string;
}

class ArrayTaskManager{
    id: number;
    taskArray: ATask[];

    constructor(){
        this.taskArray = [];

    }

    addTask(task:ATask){
        this.taskArray.push(task);
    }

    deleteTaskById(id: number){
        const index = this.taskArray.findIndex(task => task.id === id);
        if (index !== -1){
            this.taskArray.splice(index, 1);
        }
        else{
            console.log(`The ID ${id} is not in your tasks`);
        }
    }

    displayTasks(){
        console.log("Your tasks: ");
        this.taskArray.forEach(task =>{
            console.log(`${task.id}. ${task.description}`);
        })
    }

    noOfTasks(): number{
        return this.taskArray.length;
    }

    searchArrayById(id: number){
        let found = false;
        for(let i = 0;i < this.taskArray.length; i++){
            if(this.taskArray[i].id === id){
                console.log(`${id}.  ${this.taskArray[i].description}`);
                found = true;
                return;
            }
        }
       if(!found){
        console.log(`Task ${id} not found`);
       }
    }
}

const myArrayTaskManager = new ArrayTaskManager();
myArrayTaskManager.addTask({id: 1, description: "Wash the plates"});
myArrayTaskManager.addTask({id: 2, description: "Complete Hatchdev Assignment"});
myArrayTaskManager.addTask({id: 3, description: "Sweep the room"});
myArrayTaskManager.addTask({id: 4, description: "Complete CSC 224 note"});
myArrayTaskManager.displayTasks();

myArrayTaskManager.deleteTaskById(1);
myArrayTaskManager.displayTasks();

console.log(`You have ${myArrayTaskManager.noOfTasks()} tasks left`);
myArrayTaskManager.searchArrayById(3);