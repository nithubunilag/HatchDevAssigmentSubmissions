export class DLNode<T> {
    data: T;
    next: DLNode<T> | null;
    prev: DLNode<T> | null;
    
    constructor(data: T) {
        this.data = data;
    }
}

export class DoubleLinkedList<T> {
    head: DLNode<T> | null;

    constructor(){
        this.head = null
    }

    add(data: T, index:number){
        const newNode = new DLNode(data);

        // empty list or adding to the beginning (index 0)
        if (this.head == null || index === 0) {
            newNode.next = this.head;
            if (this.head) {
            this.head.prev = newNode;
            }
            this.head = newNode;
            return;
        }

        // Adding to the end (index -1)
        if (index === -1) {
            if (!this.head) {
            this.head = newNode;
            return;
            }
            let currentNode = this.head;
            while (currentNode.next) {
            currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
            return;
        }

        // Handle adding in the middle (positive index)
        let addIndex = 0;
        let currentNode = this.head;
        while (currentNode.next && addIndex < index - 1) {
            currentNode = currentNode.next;
            addIndex++;
        }
        if (!currentNode.next) {
            currentNode.next = newNode;
            newNode.prev = currentNode;
            return;
        }
        newNode.next = currentNode.next;
        currentNode.next.prev = newNode;
        newNode.prev = currentNode;
        currentNode.next = newNode;

    }

    delete(index: number){
        if(this.head == null) {
            return false
        } else {
            let deleteIndex = 0;
            let currentNode = this.head
            while(deleteIndex < index && currentNode.next){
                currentNode = currentNode.next
                deleteIndex++
            }
            if(currentNode.prev !== null){
                currentNode.prev.next = currentNode.next
            }

        }
        return true
    }

    shuffle(){
        let currentNode = this.head;
        let shuffledList: Array<T> = [];

        while (currentNode) {
        shuffledList.push(currentNode.data);
        currentNode = currentNode.next;
        }

        shuffledList.sort(() => Math.random() - 0.5);

        this.head = null;

        for (const item of shuffledList) {
        this.add(item, -1);
        }
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

}

const dll = new DoubleLinkedList()
dll.add(1,0)
dll.add(2,1)
dll.add(3,2)
dll.shuffle()
dll.print()