// class LNode<T> {
//     data: T 
//     next: LNode<T>

//     constructor(val: T) {
//         this.data = val;
//     }
// }



// class LinkedList<T> {
//     head: LNode<T>

//     add(val: T) {
//         const newNode = new LNode(val)
                
//         // if we don't have 'head'
//         if(!this.head) {
//             this.head = newNode;
//             return;
//         }

//         // if we have 'head'

//         let currentNode = this.head;

//         // [] => [] => [] => [] => null 
//         //                          ^
//         //  ^ 
//         while(currentNode.next != null) { // null
//             currentNode = currentNode.next;
//         }

//         currentNode.next = newNode;
//     }

//     print() {

//         let arr: T[] = [];
//         if(!this.head){
//             return 
//         }
        
//         let currNode = this.head;

//         while(currNode){
//             arr.push(currNode.data)
//             currNode = currNode.next
//         }

//         console.log(arr)
//     }

//     prepend(val: T) {
//         let newNode = new LNode(val);

//         const oldHead = this.head;

//         this.head = newNode;

//         newNode.next = oldHead;

//     }

//     search(val: T) {

//         if(!this.head) {
//             return 
//         }
//         let currNode = this.head;
//         let pos = 1;

//         while(currNode){
//             if(currNode.data == val){
//                 console.log(`Found at position ${pos}`)
//                 return
//             }
//             pos += 1
//             currNode = currNode.next
//         }

//         // while(currNode) {
//         //     if(currNode.data === val) {
//         //         return true;
//         //     }
//         //     currNode = currNode.next;
//         // }

//         // return false;
//     }
// }

// const l = new LinkedList<number>()
// l.add(1);
// l.add(2);
// l.add(3)
// l.prepend(10)
// l.search(2)

// l.print()



const factorial = (n: number): number => {
    if(n <= 1) return 1;

    return n * factorial(n - 1)
}

// console.log(factorial(4)) // 120

const fibon = (n: number) =>{

    if (n < 1) return "Thunder fire you"

    if (n === 1 || n ===2) return 1;

    return fibon(n - 1) + fibon(n - 2)
}

console.log(fibon(5))




    