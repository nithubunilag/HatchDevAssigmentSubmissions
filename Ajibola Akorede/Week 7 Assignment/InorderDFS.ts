class TrNode<T>{
    value: T;
    left: TrNode<T> | null;
    right: TrNode<T> | null;
    
        constructor(value: T){
            this.value = value;
            this.left = null;
            this.right = null;
    
        }
    }
    
    class InOrderFirstSearch<T>{
        root: TrNode<T> |null
    
 constructor () {
            this.root = null;  
        }
        output: T[] = [];
            
        InorderDFS(root: TNode<T> | null, output: T[] = []): T[] {
            if (!root) {
                return output;
            }
            this.InorderDFS(root.left, output);
            output.push(root.value);
            this.InorderDFS(root.right, output);

    
    return output
    }
}

const newTreees = new InOrderFirstSearch<number>();
newTreees.root = new TrNode(1);
newTreees.root.left = new TrNode(2);
newTreees.root.right = new TrNode(3);
newTreees.root.left.left = new TrNode(4);
newTreees.root.left.right= new TrNode(5);
newTreees.root.right.left = new TrNode(6);
newTreees.root.right.right = new TrNode(7);


console.log( "InOrderDepthFirstSearch:",newTreees.InorderDFS(newTreees.root));