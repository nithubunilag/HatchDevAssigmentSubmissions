interface Assignment {
    id: number;
    title: string;
    details: string;
}

class Node {
    assignment: Assignment;
    next: Node | null;

    constructor(assignment: Assignment) {
        this.assignment = assignment;
        this.next = null;
    }
}

class AssignmentManager {
    private assignmentsArray: Assignment[];
    private head: Node | null;

    constructor() {
        this.assignmentsArray = [];
        this.head = null;
    }

    // Add assignment to both array and linked list
    addAssignment(assignment: Assignment) {
        this.assignmentsArray.push(assignment);

        const newNode = new Node(assignment);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Delete assignment from both array and linked list
    deleteAssignment(assignmentId: number) {
        this.assignmentsArray = this.assignmentsArray.filter(assignment => assignment.id !== assignmentId);

        if (!this.head) return;

        if (this.head.assignment.id === assignmentId) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next!.assignment.id === assignmentId) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Display assignments from both array and linked list
    displayAssignments() {
        console.log("Assignments in Array:");
        this.assignmentsArray.forEach(assignment => {
            console.log(`ID: ${assignment.id}, Title: ${assignment.title}, Details: ${assignment.details}`);
        });

        console.log("\nAssignments in Linked List:");
        let current = this.head;
        while (current !== null) {
            console.log(`ID: ${current.assignment.id}, Title: ${current.assignment.title}, Details: ${current.assignment.details}`);
            current = current.next;
        }
    }
}


const assignmentManager = new AssignmentManager();
assignmentManager.addAssignment({ id: 1, title: "Study Calculus", details: "Read about functions and limits" });
assignmentManager.addAssignment({ id: 2, title: "Eat Lunch", details: "Buy Korede spaghetti" });
assignmentManager.displayAssignments();
assignmentManager.deleteAssignment(1);
assignmentManager.displayAssignments();
