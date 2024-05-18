class LNode<T> {
    data: T;
    next: LNode<T> | null;
    
    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedList<T> {
    head: LNode<T> | null;

    constructor() {
        this.head = null;
    }

    add(data: T) {
        const node = new LNode(data);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
    delete(data: T) {
        if (!this.head) return false;
        // check if the data is in the linked list
        let currentNode: LNode<T> | null = this.head;
            while(currentNode?.next){
                if(currentNode.next.data == data){
                    // remove the node from the linked list
                    const newNextNode = currentNode.next.next
                    currentNode.next = newNextNode
                }
                currentNode = currentNode.next
            }
        
    }
    prepend(data: T) {
        const node = new LNode(data);
        node.next = this.head;
        this.head = node;
    
    }
    print(){
        const data: Array<T> = []
        let currentNode = this.head;
        while(currentNode){
            data.push(currentNode.data)
            currentNode = currentNode.next;
        }
        console.log(data)
    
    }
    search(data: T) {
        const results: Array<string> = [];
        let position: number = 0
        let currentNode = this.head;
        if(currentNode){
            while(currentNode.next) {
                if(currentNode.data === data){
                    results.push(`${currentNode.data} at index ${position}`)
                }
                position++
                currentNode = currentNode.next
            }
        }
        console.log(results)
    }
}


