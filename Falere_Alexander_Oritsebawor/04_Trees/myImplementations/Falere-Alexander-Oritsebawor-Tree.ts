// Email:alexanderfalere@gmail.com
//Start by setting type
type TNode<T>={
    value:T;
    left: TNode<T> | undefined;
    right: TNode<T> | undefined;
};

class Tree<T>{
    root: TNode<T> | undefined;

    constructor(){
        this.root = undefined; //Defining the root of the tree
    }

    /*
    First thing first is to build an insert method which we can use
    to insert items into the node
    */ 

    insert(item:T):void{
        const newNode = {value: item} as TNode<T>;
        if(!this.root){
            this.root=newNode;
            return;
        }else{
            let curr = this.root;
            while (curr){
                if(curr.value>item){
                    if(!curr.left){
                        // go left
                        curr.left=newNode;
                        return;
                    }else{
                        curr=curr.left;
                    }
                }else if(curr.value<item){
                    if(!curr.right){
                        curr.right=newNode;
                        return;
                    }else{
                        curr=curr.right;
                    }
                }
            }
        }
    }
}
// In-Order Traversal
function inOrder(node:TNode<number> | undefined):void{
    if(!node){
        return;
    }else{
        // Works left,root-node,right
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);

    }
}

// Pre-Order Traversal
function preOrder(node:TNode<number> | undefined):void{
    if(!node){
        return;
    }else{
        // rootnode,leftnode,rightnode
        console.log(node.value);
        inOrder(node.left);
        inOrder(node.right);
        
    }
}
// Post-Order Traversal
function postOrder(node:TNode<number> | undefined):void{
    if(!node){
        return;
    }else{
        // leftnode,rightnode,rootnode
        inOrder(node.left);
        inOrder(node.right);
        console.log(node.value);
        
    }
}
// Testing
const t = new Tree();
t.insert(10);
t.insert(5);
t.insert(100);
t.insert(2);
t.insert(7);
t.insert(50);
t.insert(101);

console.log(t);

console.log("In Order");
inOrder(t.root as TNode<number>);

console.log("Pre Order")
postOrder(t.root as TNode<number>);

console.log("Post Order");
preOrder(t.root as TNode<number>);