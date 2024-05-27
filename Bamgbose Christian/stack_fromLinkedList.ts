// Define a class for the linked list node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define a class for the stack
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to push an element onto the stack
    push(data) {
        // Create a new node with the given data
        const newNode = new Node(data);

        // Set the next pointer of the new node to the current top node
        newNode.next = this.top;

        // Set the top pointer to the new node
        this.top = newNode;

        // Increment the size of the stack
        this.size++;
    }

    // Method to pop an element from the stack
    pop() {
        // Check if the stack is empty
        if (this.isEmpty()) {
            return null;
        }

        // Get the data from the top node
        const data = this.top.data;

        // Move the top pointer to the next node
        this.top = this.top.next;

        // Decrement the size of the stack
        this.size--;

        // Return the popped element
        return data;
    }

    // Method to get the top element of the stack
    peek() {
        // Check if the stack is empty
        if (this.isEmpty()) {
            return null;
        }

        // Return the data from the top node
        return this.top.data;
    }

    // Method to get the size of the stack
    getSize() {
        return this.size;
    }
}

// Create a new stack object
const stack = new Stack();

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Pop elements from the stack
console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20

// Get the top element of the stack
console.log(stack.peek()); // Output: 10

// Get the size of the stack
console.log(stack.getSize()); // Output: 1