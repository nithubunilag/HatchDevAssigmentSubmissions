// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem

function main() {
    let testCases = [
        [1, 2, 2, 3, 4],
        [3, 3, 3, 4, 5, 5],
    ];

    for (const inputs of testCases) {
        let llist: SinglyLinkedList = new SinglyLinkedList();
        for (let num of inputs) {
            llist.insertNode(num);
        }
        console.log("Input");
        printSinglyLinkedList(llist.head);

        const newHead: SinglyLinkedListNode = removeDuplicates(llist.head!);
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

function removeDuplicates(llist: SinglyLinkedListNode): SinglyLinkedListNode {
    // Write your code here
    let current = llist;
    while (current) {
        if (!current.next) break;
        if (current.data === current.next.data) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return llist;
}

main();