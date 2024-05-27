/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */
class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
}

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
}

function printSinglyLinkedList(node: SinglyLinkedListNode | null): number[] {
    let nodesArray: number[] = [];

    while (node != null) {
        nodesArray.push(node.data);
        node = node.next;
    }

    return nodesArray;
}

/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     number data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
    if (!llist) return llist;
    if (!llist.next) return llist;

    let prevNode: SinglyLinkedListNode | null = null;
    let nextNode: SinglyLinkedListNode | null = null;
    let currNode: SinglyLinkedListNode | null = llist;

    while (currNode) {
        nextNode = currNode.next;
        currNode.next = prevNode; // reverse pointers

        prevNode = currNode;
        currNode = nextNode;
    }

    return prevNode!;
}

function main() {
    let hackerRankTestCases = [[1, 5, 1, 2, 3, 4, 5]];

    for (const testCase of hackerRankTestCases) {
        const ll = new SinglyLinkedList();
        const seen = new Set();

        for (const num of [...testCase].sort()) {
            // Avoid duplicates
            if (!seen.has(num)) {
                ll.insertNode(num);
                seen.add(num);
            }
        }

        const head = ll.head;
        console.log('Input:', printSinglyLinkedList(head));

        const reversedHead = reverse(ll.head!);
        console.log('Reversed:', printSinglyLinkedList(reversedHead));
    }
}

main();
