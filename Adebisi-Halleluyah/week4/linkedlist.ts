class LNode<T> {
    data: T
    next: LNode<T>

    constructor(val: T) {
        this.data = val;
    }
}

class LinkedList<T> {
    head: LNode<T>

add(val: T) {
    const newNode = new LNode(val)

    // if we dont have head
    if(!this.head) {
        this.head = newNode;
        return;
    }

    let currentNode = this.head;

    while (currentNode.next != undefined ) {
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;

    //if we have a class
}
printValues() {
    let currentNode = this.head;
    const values: T[] = [];

    while (currentNode) {
        values.push(currentNode.data);
        currentNode = currentNode.next;
    }

    console.log(values.join(' -> '));
}
}

const L = new LinkedList<number>();
L.add(1);
L.add(2);
L.add(3);
L.printValues(); 
