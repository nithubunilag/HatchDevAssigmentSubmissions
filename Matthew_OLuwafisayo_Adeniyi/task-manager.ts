class TaskManagerArray {
    private tasks: string[] = [];
  
    addTask(task: string): void {
      this.tasks.push(task);
      console.log(`Task "${task}" added.`);
    }
  
    deleteTask(index: number): void {
      if (index >= 0 && index < this.tasks.length) {
        const removedTask = this.tasks.splice(index, 1);
        console.log(`Task "${removedTask[0]}" deleted.`);
      } else {
        console.log(`Invalid index: ${index}`);
      }
    }
  
    displayTasks(): void {
      if (this.tasks.length === 0) {
        console.log("No tasks available.");
      } else {
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
          console.log(`${index}: ${task}`);
        });
      }
    }
  }
  
  
  const taskManagerArray = new TaskManagerArray();
  taskManagerArray.addTask("Buy groceries");
  taskManagerArray.addTask("Walk the dog");
  taskManagerArray.displayTasks();
  taskManagerArray.deleteTask(0);
  taskManagerArray.displayTasks();
  