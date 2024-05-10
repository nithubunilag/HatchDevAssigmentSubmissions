// Interface for a Task object
interface Task {
  id: number;
  description: string;
}

// Class to manage tasks
class TaskManager {
  // Array to store tasks
  private tasksArray: Task[] = [];
  // LinkedList to store tasks
  private tasksLinkedList: LinkedList<Task> = new LinkedList<Task>();

  // Add a task to both the array and the linked list
  addTask(task: Task) {
    this.tasksArray.push(task);
    this.tasksLinkedList.append(task);
  }

  // Delete a task by ID from both the array and the linked list
  deleteTask(id: number) {
    this.tasksArray = this.tasksArray.filter((task) => task.id !== id);
    this.tasksLinkedList.removeById(id);
  }

  // Displays all tasks in the array and the linked list
  displayTasks() {
    console.log("Tasks in Array:");
    this.tasksArray.forEach((task) =>
      console.log(`ID: ${task.id}, Description: ${task.description}`),
    );

    console.log("\nTasks in Linked List:");
    this.tasksLinkedList.display();
  }
}

// Class for node in a LinkedList
class node<T extends Task> {
  constructor(
    public data: T,
    public next: node<T> | null = null,
  ) {}
}

// Class for LinkedList of tasks
class LinkedList<T extends Task> {
  private head: node<T> | null = null;

  // Appends a new task node to the linked list
  append(data: T) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Remove a task node by ID from the linked list
  removeById(id: number) {
    if (!this.head) {
      return;
    }
    if (this.head.data.id === id) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data.id === id) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // Displays all tasks in the linked list
  display() {
    let current = this.head;
    while (current) {
      console.log(
        `ID: ${current.data.id}, Description: ${current.data.description}`,
      );
      current = current.next;
    }
  }
}

const taskManager = new TaskManager();

taskManager.addTask({ id: 1, description: "Complete assignments" });
taskManager.addTask({ id: 2, description: "Go for lectures" });
taskManager.addTask({ id: 3, description: "Wash cloths" });

taskManager.deleteTask(3);

taskManager.displayTasks();
