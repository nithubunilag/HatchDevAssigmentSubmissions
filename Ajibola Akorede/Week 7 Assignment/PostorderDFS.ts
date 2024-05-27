class TreNode<T>{
    value: T;
    left: TreNode<T> | null;
    right: TreNode<T> | null;
    
        constructor(value: T){
            this.value = value;
            this.left = null;
            this.right = null;
    
        }
    }
    
    class PostOrderFirstSearch<T>{
        root: TreNode<T> |null
    
 constructor () {
            this.root = null;  
        }
        output: T[] = [];
            
        PostorderDFS(root: TNode<T> | null, output: T[] = []): T[] {
            if (!root) {
                return output;
            }
            this.PostorderDFS(root.left, output);
            this.PostorderDFS(root.right, output);
            output.push(root.value);

    
    return output
    }
}

const newTreeees = new PostOrderFirstSearch<number>();
newTreeees.root = new TreNode(1);
newTreeees.root.left = new TreNode(2);
newTreeees.root.right = new TreNode(3);
newTreeees.root.left.left = new TreNode(4);
newTreeees.root.left.right= new TreNode(5);
newTreeees.root.right.left = new TreNode(6);
newTreeees.root.right.right = new TreNode(7);


console.log( "PostOrderDepthFirstSearch:",newTreeees.PostorderDFS(newTreeees.root));