class Task{
    id: number
    name: string 

    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }
 }
class TaskManager {
     tasks: Task[] = []

    addTask(taskName: string): void {
        const taskId = this.tasks.length + 1
        const newTask = new Task(taskId, taskName)
        this.tasks.push(newTask)
        console.log(`Task "${taskName}" added with ID ${taskId}`)
    }

    deleteTask(taskId: number): void {
        const index = this.tasks.findIndex((task) => task.id === taskId)
        if (index !== -1) {
            const deletedTask = this.tasks.splice(index, 1)[0];
            console.log(`Task "${deletedTask.name}" (ID ${taskId}) deleted`)
        } else {
            console.log(`Task with ID ${taskId} not found`)
        }
    }

    displayTasks(): void {
        console.log('Current tasks:')
        this.tasks.forEach((task) => {
            console.log(`ID ${task.id}: ${task.name}`)
        })
        
        if(this.tasks.length === 0){
            console.log('Every Task has been completed.')
        }

    }
}

const taskManager = new TaskManager()
taskManager.addTask('Go Shopping')
taskManager.addTask('Finnish Assignment')
taskManager.displayTasks()
taskManager.deleteTask(2)
taskManager.displayTasks()
taskManager.deleteTask(1)
taskManager.displayTasks()

