class LNode<T> {
    data: T;
    next: LNode<T>;
    constructor(val: T) {
        this.data = val;
    }
};

class LinkedList<T> {
    head: LNode<T> | null;
    add(val: T) {
        const newNode = new LNode(val);

        // If we have head
        if (this.head) {
            let currentNode = this.head;
            while (currentNode.next != undefined) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode;
        }
        // If we don't have head
        if (!this.head) {
            this.head = newNode;
            return;
        };
    };
};
const linkedList = new LinkedList<number>();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
console.log(linkedList);