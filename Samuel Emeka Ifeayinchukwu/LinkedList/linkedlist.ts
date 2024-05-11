class LNode<T> {
    data: T;
    next: LNode<T> | null;
    
    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
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


const ll = new LinkedList<number>();
ll.add(10);
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40)
ll.prepend(50)
ll.search(50)