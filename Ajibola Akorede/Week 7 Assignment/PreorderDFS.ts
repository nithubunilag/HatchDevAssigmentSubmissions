class TNode<T>{
    value: T;
    left: TNode<T> | null;
    right: TNode<T> | null;
    
        constructor(value: T){
            this.value = value;
            this.left = null;
            this.right = null;
    
        }
    }
    
    class DepthFirstSearch<T>{
        root: TNode<T> |null
    
 constructor () {
            this.root = null;  }


    
   stack: TNode<T> | null[] = [];
       output: T[] = [];
     
       preorderDFS(root: TNode<T> | null, output: T[] = []): T[] {
        if (!root) {
            return output;
        }
      
        // Visit the root node
        output.push(root.value);
      
        // Traverse the left subtree
        this.preorderDFS(root.left, output);
      
        // Traverse the right subtree
        this.preorderDFS(root.right, output);
      
        return output;
      }
      }
      
      
      
          
      
      const newTrees = new DepthFirstSearch<number>();
      newTrees.root = new TNode(1);
      newTrees.root.left = new TNode(2);
      newTrees.root.right = new TNode(3);
      newTrees.root.left.left = new TNode(4);
      newTrees.root.left.right= new TNode(5);
      newTrees.root.right.left = new TNode(6);
      newTrees.root.right.right = new TNode(7);
      
      
      
    
      console.log( "PreOrderDepthFirstSearch:",newTrees.preorderDFS(newTrees.root));

      //Tree structure
      //      1
      //     /  \
      //    2    3
      //   / \  / \
      //  4   5 6  7

      // for preorder DFS we start from the parent then to the left, then checks if the left has a left iterates all, then checks for right.