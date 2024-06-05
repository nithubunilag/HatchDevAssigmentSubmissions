class TaskNode<T> {
  constructor(public data: T, public next: TaskNode<T> | null = null) {}
}

class TaskManager<T> {
  constructor(private head: TaskNode<T> | null = null) {}

  addTask(task: T) {
    const newTaskNode = new TaskNode(task);

    if (!this.head) {
      this.head = newTaskNode;
      return;
    }

    let currentTaskNode = this.head;

    while (currentTaskNode.next !== null) {
      currentTaskNode = currentTaskNode.next;
    }
    currentTaskNode.next = newTaskNode;
  }

  deleteTask(task: T) {
    let currentTaskNode = this.head;
    if (currentTaskNode && currentTaskNode.data === task) {
      this.head = currentTaskNode.next;
      currentTaskNode = null;
      return;
    }
    let prevTaskNode: TaskNode<T> | null = null;
    while(currentTaskNode && currentTaskNode.data !== task){
        prevTaskNode = currentTaskNode;
        currentTaskNode = currentTaskNode.next;
    }
    if(!currentTaskNode){
        return
    }
    if(prevTaskNode){
        prevTaskNode.next = currentTaskNode.next;
    }
    currentTaskNode = null;
  }

  printCurrentTasks() {
    let currentTaskNode = this.head;
    while(currentTaskNode){
        console.log(currentTaskNode.data)
        currentTaskNode = currentTaskNode.next;
    }
  }
}

const taskManager = new TaskManager<string>();
taskManager.addTask('Task-1')
taskManager.addTask('Task-2')
taskManager.addTask('Task-3')
taskManager.addTask('Task-4')
// console.log(taskManager)
console.log("\n4 Tasks added...\nAvailable Tasks:")
taskManager.printCurrentTasks()
console.log("\nTasks 2 and 3 are deleted...\nAvailable Tasks:")
taskManager.deleteTask('Task-2')
taskManager.deleteTask('Task-3')
taskManager.printCurrentTasks()