class Task {
    next: Task | null = null;
  
    constructor(public id: number, public title: string) {}
  }
  
  class TaskManager {
    tasks: Task[] = [];
    head: Task | null = null;
  
    addTask(title: string) {
      const newTask = new Task(this.tasks.length + 1, title);
      this.tasks.push(newTask);
  
      if (!this.head) {
        this.head = newTask;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newTask;
      }
    }
  
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id);
  
      if (this.head?.id === id) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        while (current?.next) {
          if (current.next.id === id) {
            current.next = current.next.next;
            break;
          }
          current = current.next;
        }
      }
    }
  
    displayTasks() {
      console.log("Tasks:");
      let current = this.head;
      while (current) {
        console.log(`ID: ${current.id}, Title: ${current.title}`);
        current = current.next;
      }
    }
  }
  
  const taskManager = new TaskManager();
  taskManager.addTask("Pray and study the word");
  taskManager.addTask("Meet my daily walk target");
  taskManager.addTask("Play COD");
  taskManager.addTask("Research about the assignment");
  taskManager.addTask("Try to write code alone");
  taskManager.addTask("Fix errors with online resources");
  taskManager.addTask("Read on the London System");
  taskManager.addTask("Solve at least 15 puzzles on lichess");
  taskManager.displayTasks();
  taskManager.deleteTask(5);
  taskManager.displayTasks();
  