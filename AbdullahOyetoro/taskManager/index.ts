interface ITask{
  id: number;
  name: string;
  description: string;
  priority: priorityType
  status:statusType;
  next: Task |null|undefined;
}

type statusType ='pending'| 'running'|'completed'
type priorityType = "major"|"middle"|"minor";

class Task implements ITask {
  id: number;
  name:string;
  description: string = "";
  priority:priorityType;
  status:statusType;
  next: Task| null | undefined = null;
  constructor(id:number, name:string,priority:priorityType, status:statusType,next?:Task){
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.status = status;
    this.next = next
  }
  set setNext(task:Task){
    if(this.next == null){
      this.next = task
    }
  }
}
class TaskList{
  name: string;
  taskList: Task[];
  addToTasklist(task:Task){
    this.taskList.push(task)
  }
  constructor(name:string){
    this.name = name
  }
  getTask(name: string): Task | undefined {
    return this.taskList.find((object) =>
      object.name.toLowerCase() === name.toLowerCase()
    );
  }
}
class TaskManager{
  head:Task;
  prepend(task:Task){
    //If the head doesnt exist theres nothing to prepend to
    if(!this.head){
      console.log('This head of the list doesnt exist hence nothing to prepend to')
      return}; 
    //if the task is not a major priority it cant just become the head of the linked list
    if(task.priority != "major"){
      console.log("The only things that can be the head are tasks that have are a 'major' priority")
      return};
    const oldNode = this.head;
    const newNode = new Task(task.id,task.name,task.priority,task.status)
    newNode.next = oldNode
    this.head = newNode
    console.log("Successfully prepended")
  }
  append(task:Task){
    const newNode = new Task(task.id,task.name,task.priority,task.status)
    // if no head is found
    if (!this.head){
      this.head = task;
      console.log("This task is now the head")
    }
    //if theres a head
    let currentNode = this.head;

    while (currentNode.next ){
      currentNode = currentNode.next
    }
    currentNode.next = newNode
    console.log("Successfully appended")
  }

  print() {
    if (!this.head) {
      console.log("Head doesn't exist");
      return;
    }

    let arr: Task[] = [];
    let currNode = this.head;

    while (currNode.next) {
      arr.push(currNode);
      currNode= currNode.next;
    }

    console.log(arr);
  }
}

const task3 = new Task(6,"The space task","middle","running")
const task1 = new Task(1,"arbitration","major","pending", task3)
const task2 = new Task(3,"naming","major","completed")
const task5 = new Task(5,"gaming","minor","pending",task2)

const taskManager1 = new TaskManager()


taskManager1.append(task1)
taskManager1.prepend(task1)
taskManager1.append(task5)
console.log(taskManager1.print())