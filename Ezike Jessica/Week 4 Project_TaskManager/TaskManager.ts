interface Tasks {
    id: number;
    title: string;
    description: string;
}

class node<T> {
    task: Tasks
    next: node<T> | null = null;  /// this is just the nextAddress which has a type of the class node<T> which also has a data and a nextAddress
    
    
    constructor(val: Tasks) {
        this.task = val;
    }
}

class linkedListTaskManager<T> {
    head: node<T> | null = null;
    private nextId: number = 1;


    addTasks(title: string, description: string, position?: number) {
        const newTask: Tasks = {id: this.nextId++, title, description };
        const newNode = new node(newTask)

        //if we dont have 'head'
        if (!this.head) {
            this.head = newNode
            return;
        }

                                
        // if we have 'head'
        // [] => [] => [] => [] => [] => null
        //                                 ^
        if (position === undefined) {
            
            // default addition at the end
            let currentNode = this.head
            while( currentNode.next != undefined) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        
        }
        else if (position === 0) { //newnode should be the head
            
            //adding to the front of the head
            newNode.next = this.head
            this.head = newNode //update the head and shifts the pevious head
        }
        else {

            // adding at a specific position
            let current = this.head //starting from the head
            let previous: node<T> | null = null;
            let index = 0

            while(index < position && current.next !== null) {
                previous = current
                current = current.next //moving to the next node
                index++

            }

            newNode.next = current //new node is now pointing to the current position we are in
            if (previous) {
                previous.next = newNode; //previous will now point to the new node hence fixing the new node in the indicated position
            }
        }
    }


    delete(position: number) {
        //empty list
        if (!this.head) {
            console.log("This List is empty");
            return;
        }
        //deleting from the head
        if (position === 0) {
            this.head = this.head.next;
            return;
        }
        // Delete at specific position
        let current = this.head;
        let previous: node<T> | null = null;
        let index = 0;

        while (index < position && current.next !== null) {
            previous = current;
            current = current.next;
            index++;
            if (current === undefined) {
                console.log("error in Position");
                return;
            }
        }

        if (previous && current !== undefined) {
            previous.next = current.next;
        }
        else if (previous) {
            previous.next = null;
        }
    }


    displayTasks(): void {
        let current = this.head;
        console.log("Tasks:");
        while (current !== null) {
            const { id, title, description } = current.task;
            console.log(`ID: ${id}, Title: ${title}, Description: ${description}`);
            current = current.next;
        }
    }
}


const TaskManager = new linkedListTaskManager();

TaskManager.addTasks("NitHub Assignment", "Implement the Linked List in a task Manager");
TaskManager.addTasks("EEG323", "PowerPoint Project");
TaskManager.addTasks("GEG 323", "Read up for the upcominhg test");
TaskManager.addTasks("LAB", "Lab Report");
TaskManager.addTasks("IEEE", "Complete the circuit design")

TaskManager.displayTasks();
TaskManager.delete(0);
TaskManager.displayTasks();