// https://www.hackerrank.com/challenges/reverse-a-linked-list/problem

function main() {
    let testCases = [
        [1, 2, 3, 4, 5],
        [3, 4, 2, 3],
    ];

    for (const inputs of testCases) {
        let llist: SinglyLinkedList = new SinglyLinkedList();
        for (let num of inputs) {
            llist.insertNode(num);
        }
        console.log("Input");
        printSinglyLinkedList(llist.head);

        const newHead: SinglyLinkedListNode = reverse(llist.head!);
        console.log("Output");
        printSinglyLinkedList(newHead);
        console.log();
    }
}

class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
};

class SinglyLinkedList {
    head: SinglyLinkedListNode | null;
    tail: SinglyLinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData: number): void {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail!.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node: SinglyLinkedListNode | null): void {
    let out: number[] = [];

    while (node != null) {
        out.push(node.data);
        node = node.next;
    }

    console.log(out.join(' '));
}

function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
    // Write your code here
    if (!llist) return llist;
    if (!llist.next) return llist;

    let head: SinglyLinkedListNode = llist;

    while (llist.next) {
        const curr = llist.next;
        llist.next = curr.next;
        curr.next = head;
        head = curr;
    }
    return head;
}

main();