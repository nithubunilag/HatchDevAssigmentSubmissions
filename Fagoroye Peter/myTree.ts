class Nodell<T>{
    val: T;
    right: Nodell<T> | null = null;
    left: Nodell<T>  | null = null;

    constructor(val: T){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarryTree<T>{
    root: Nodell<T> | null = null;

    constructor(){
        this.root = null;
    }

    // INsert Method
    insert(val: T){
        const newRoot = new Nodell(val);

        if(!this.root){
            this.root = newRoot;
            return;
        }
        let queue: Nodell<T>[] = [];
        queue.push(this.root);

        while(queue.length > 0){
            let curr = queue.shift();
            if(curr!.left === null){
                curr!.left = newRoot;
                return;
            }else if(curr!.right === null){
                curr!.right = newRoot;
                return;
            }else{
                queue.push(curr!.left);
                queue.push(curr!.right);
            }
        }
    }

    bfstransversal(){
        // if there is no root
        if(!this.root){
            return;
        }

        // if there is root
        let q: Nodell<T>[] = [];

        q.push(this.root);
        while(q.length > 0){
            let parentNode = q.shift()!;     // removes the first value in the queue
            let transversalArr: Nodell<T>[] = [];     // create an arr to store the removed value

            transversalArr.push(parentNode);     // Add the removed child to the array created
            console.log(transversalArr);     // print it out

            // create an if statement to add the left or the right child of the removed node 
            if(parentNode!.left){
                q.push(parentNode!.left);
            }
            if(parentNode!.right){
                q.push(parentNode!.right);
            }
        }
    }

    // DFS Transversal
    preOrderrTraversal(): T[] {
        if (!this.root) {
            return [];
        }

        let result: T[] = [];
        let stack: Nodell<T>[] = [this.root];

        while (stack.length > 0) {
            let current = stack.pop()!;
            result.push(current.val);
            console.log(current.val);

            // Push right child first so that left is processed first
            if (current.right) {
                stack.push(current.right);
            }
            if (current.left) {
                stack.push(current.left);
            }
        }

        return result;
    }

    inOrderrTraversal(): T[] {
        if (!this.root) {
            return [];
        }

        let result: T[] = [];
        let stack: Nodell<T>[] = [];
        let current: Nodell<T> | null = this.root

        while ( current != null || stack.length > 0) {
            while(current != null){
                stack.push(current);
                current = current.left;
            }

            current = stack.pop()!;
            result.push(current.val);
            console.log(current.val);

            current = current.right;
        }

        return result;
    }

    postOrderrTraversal(): T[] {
        if (!this.root) {
            return [];
        }

        let result: T[] = [];
        let stack: Nodell<T>[] = [];
        let lastVisited: Nodell<T> | null = null;
        let current: Nodell<T> | null = this.root;

        while (current !== null || stack.length > 0) {
            
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }

            current = stack[stack.length - 1];

            if (current.right === null || current.right === lastVisited) {
                current = stack.pop()!;
                result.push(current.val);
                console.log(current.val); 
                lastVisited = current;
                current = null;
            } else {
                current = current.right;
            }
        }

        return result;
    }

}

const mytree = new BinarryTree();

mytree.insert(3);
mytree.insert(5);
mytree.insert(7);
mytree.insert(4);
mytree.insert(8);
mytree.insert(10);
mytree.insert(13);
// mytree.bfstransversal();
console.log("......................");
console.log(mytree.preOrderrTraversal());
console.log("......................");
console.log(mytree.inOrderrTraversal());
console.log("......................");
console.log(mytree.postOrderrTraversalc dcd ());