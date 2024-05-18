'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
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

function printSinglyLinkedList(node: SinglyLinkedListNode | null, sep: string, ws: WriteStream): void {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
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
    if (!llist) {
        return null;
    }

    let prev: SinglyLinkedListNode | null = null;
    let current: SinglyLinkedListNode | null = llist;
    let next: SinglyLinkedListNode | null = null;

    while (current !== null) {
        next = current.next;  
        current.next = prev;  
        prev = current;     
        current = next; 
    }

    return prev; 
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const tests: number = parseInt(readLine().trim(), 10);

    for (let testsItr: number = 0; testsItr < tests; testsItr++) {
        let llist: SinglyLinkedList = new SinglyLinkedList();

        const llistCount: number = parseInt(readLine().trim(), 10);

        for (let i: number = 0; i < llistCount; i++) {
            const llistItem: number = parseInt(readLine().trim(), 10);

            llist.insertNode(llistItem);
        }

        const llist1: SinglyLinkedListNode = reverse(llist.head);

        printSinglyLinkedList(llist1, ' ', ws);
        ws.write('\n');
    }

    ws.end();
}


//Reversed linked list using stack, below is the reverse function
// function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
//     if(!llist) {
//         return null;
//     }
//     if(!llist.next) {
//         return llist;
//     }
    
//     const stack: SinglyLinkedListNode[] = [];
    
//     let current: SinglyLinkedListNode = llist;
    
//     while(current) {
//         stack.push(current);
//         current = current.next;
//     }
    
//     let newHead = stack[stack.length - 1];
    
//     while(stack.length > 0) {
//         const lastNode = stack.pop();
//         lastNode.next = stack[stack.length - 1]
//     }
    
//     return newHead;
//  }