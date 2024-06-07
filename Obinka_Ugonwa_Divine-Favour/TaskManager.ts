// Name: Obinka Ugonwa Divine-Favour
// email: divneobk@gmail.com

// creating task nodes class

class Tasks<T>{
    data: T 
    status: boolean
    memory: number
    next: Tasks<T> 

    constructor(task: T){
        this.data = task
        this.status = true
        this.memory = 16
    }
}

// implementing a task manager using a SLL
class TaskManager<T>{
    head: Tasks<T> 

    addTask(task: T){
        const newTask = new Tasks(task)

        if(!this.head){
            this.head = newTask
            return
        }

        let currTask = this.head
        while(currTask.next !== undefined){
            currTask = currTask.next
        }
        currTask.next = newTask

    }
    
    endTask(task: Tasks<T>){
        task.status = false
        task.memory = 0
        console.log(`Task ${task.data} has been terminated and momery has been cleared`)
    }

    deleteTask(task: T){

        // if there are no task
        if(!this.head){
            console.log("There are no tasks running currently")
            return
        }

        // if we're deleting the first task
        if(this.head.data == task){
            this.head = this.head.next
            return
        }

        // deleting a random task; while there's a task and it's data isn't equal to what we're deleting, traverse.
        let currTask = this.head
        while(currTask.next && currTask.next.data !== task){
            currTask = currTask?.next!
        }
        if(currTask.next){
            currTask.next = currTask.next.next
            console.log(`The task ${currTask.data} has been deleted`)
        }else{
            console.log("the task isn't available")
        }
        
    }

    displayTask(){
        let taskArr: T[] = []

        if(!this.head){
            console.log("There are no tasks running")
            return
        }

        let currTask = this.head
        while(currTask){
            taskArr.push(currTask.data)
            currTask = currTask.next
        }

        console.log("Running tasks:")
        console.log(taskArr)
    }
}

let myManager = new TaskManager()

let t1 = new Tasks("task 1")
let t2 = new Tasks("task 2")
let t3 = new Tasks("task 3")
let t4 = new Tasks("task 4")

myManager.addTask(t1)
myManager.addTask(t2)
myManager.addTask(t3)
myManager.addTask(t4)
myManager.deleteTask(t3)
console.log(myManager)
myManager.displayTask()