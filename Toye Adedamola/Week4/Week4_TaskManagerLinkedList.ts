type TasK = {
    id: number;
    description: string;
}

class TaskNode<T>{
    data: TasK;
    next_node: TaskNode<TasK> | null;

    constructor(data: TasK){
        this.data = data;
        this.next_node = null;
    }
}

class TasksLinkedList<T>{
    head: TaskNode<TasK> | null;

    constructor(){
        this.head = null;  //ensure the list is empty when just created
    }

    append(task: TasK){
        const new_node: TaskNode<TasK> = new TaskNode(task);

        if(!this.head){
            this.head = new_node;
        }

        else{
            let current_node: TaskNode<TasK>  = this.head;
            while(current_node.next_node !== null){
                current_node = current_node.next_node;
            }
            //When you get to the tail
            current_node.next_node = new_node;
        }
    }

    prepend(task: TasK){
        const new_node: TaskNode<TasK>  = new TaskNode(task);
        new_node.next_node = this.head;
        this.head = new_node
    }

    deleteById(id: number){
        if (!this.head) {
            console.log("You can't delete from an empty list!");
            return;
        }
    
        // Delete the node if it's the head
        if (this.head.data.id === id) {
            this.head = this.head.next_node;
            return;
        }

        let current_node = this.head;
        while(current_node.next_node !== null){
            if(current_node.next_node.data.id === id){
                current_node.next_node = current_node.next_node.next_node;
                return;
            }
            current_node = current_node.next_node;
        }
        console.log("Task with ID", id, "not found");
    }

    search(id: number){
        if(!this.head){
            console.log("ERROR! You can't search an empty list");
        }
        let current_node = this.head;
        while(current_node !== null){
            if(current_node.data.id == id){
                console.log(`${current_node.data.id}. ${current_node.data.description}`);
                return;
            }
            current_node = current_node.next_node;
        }
    }

    displayTasksLinkedList(){
        if (!this.head) {
            console.log("The list is empty.");
            return;
        }
        
        let current_node: TaskNode<TasK>| null = this.head;
        
        let count = 1;
        console.log("\n My Tasks linked list:");
        while(current_node !== null){
            console.log(`${count}.  ${current_node.data.description}`);
            current_node = current_node.next_node;
            count++;
        }
    }

    size(){
        let current_node =  this.head;
        let count = 0;

        while(current_node !== null){
            count++;
            current_node = current_node.next_node;
        }
        console.log(`There are ${count} tasks in your lists`);
    }


}


const myLinkedListsManager = new TasksLinkedList<TasK>();
myLinkedListsManager.append({id: 1, description: "Wash the plates"});
myLinkedListsManager.append({id: 2, description: "Sweep the room"});
myLinkedListsManager.append({id: 3, description: "Complete CSC 224 note"});
myLinkedListsManager.prepend({id: 4, description: "Complete Hatchdev Assignment"})

myLinkedListsManager.deleteById(2);
myLinkedListsManager.size()
myLinkedListsManager.displayTasksLinkedList();

console.log("\n");
myLinkedListsManager.search(3);


