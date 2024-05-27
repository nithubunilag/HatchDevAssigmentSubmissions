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

// HackerRank problem set
function removeDuplicates(llist: SinglyLinkedListNode): SinglyLinkedListNode {
    let seen = new Set<number>();
    let curr: SinglyLinkedListNode | null = llist;
    let prev: SinglyLinkedListNode | null = null;

    while (curr) {
        if (seen.has(curr.data)) {
            // skip
            prev!.next = curr.next;
        } else {
            seen.add(curr.data);
            prev = curr;
        }

        curr = curr.next;
    }

    return llist;
}

function main() {
    let hackerRankTestCases = [
        [1, 5, 1, 2, 2, 3, 4],
        [3, 3, 3, 4, 5, 5],
    ];

    for (const testCase of hackerRankTestCases) {
        const ll = new SinglyLinkedList();

        for (const num of testCase) {
            ll.insertNode(num);
        }

        const head = ll.head;
        console.log('Input:', printSinglyLinkedList(head));

        const newHead = removeDuplicates(head!);
        console.log('Output:', printSinglyLinkedList(newHead));
    }
}

main();
