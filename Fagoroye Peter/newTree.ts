class Nodel<T>{
    val: T;
    right: Nodel<T> | null = null;
    left: Nodel<T>  | null = null;

    constructor(val: T){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree<T>{
    root: Nodel<T> | null = null;

    constructor(){
        this.root = null;
    }

    bfstransversal(){
        // if there is no root
        if(!this.root){
            return;
        }

        // if there is root
        let q: Nodel<T>[] = [];

        q.push(this.root);
        while(q.length > 0){
            let parentNode = q.shift()!;     // removes the first value in the queue
            let transversalArr: Nodel<T>[] = [];     // create an arr to store the removed value

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
}