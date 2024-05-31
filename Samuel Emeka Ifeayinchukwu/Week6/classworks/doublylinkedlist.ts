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

    add(data: T, index?:number){
        const newNode = new DLNode(data);

        if(index){

            // empty list or adding to the beginning
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

            // Adding in between the linked list
            let currentNode = this.head;
            let currentIndex = 0;
            while (currentNode.next && currentIndex < index -1) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            
            if(currentNode.next){
                newNode.next = currentNode.next;
                currentNode.next.prev = newNode;
                currentNode.next = newNode;
                newNode.prev = currentNode;
                return;
            }

        }

        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        
        

    }

    delete(index: number){
        if(this.head == null) {
            return false
        } else if(index == -1){
            //Delete the last item
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.prev!.next = null
            return currentNode
        }else {
            let deleteIndex = 0;
            let currentNode = this.head
            while(deleteIndex < index && currentNode.next){
                currentNode = currentNode.next
                deleteIndex++
            }
            if(currentNode.prev !== null){
                currentNode.prev.next = currentNode.next
            }
            return currentNode
        }
        
    }

    get(index: number){
        if(this.head == null){
            return false
        } else if (index === -1) {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            return currentNode
        } else {
            let currentIndex = 0;
            let currentNode = this.head;
            while(currentNode.next && currentIndex < index){
                currentNode = currentNode.next
                currentIndex++
        }
            return currentNode
        }
        
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
        this.add(item);
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

