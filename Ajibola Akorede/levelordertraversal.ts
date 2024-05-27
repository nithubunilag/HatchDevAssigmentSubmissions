//Ajibola Akorede 
//ajibolaakorede2021@gmail.com


class TreeNode<T>{
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    
        constructor(value: T){
            this.value = value;
            this.left = null;
            this.right = null;
    
        }
    }
    
    class BinaryTree<T>{
        root: TreeNode<T> |null
    
 constructor () {
            this.root = null;  }



traverse(): T[] {
    if (!this.root) {
      return [];
    }
  
    const result: T[] = [];
    const queue: TreeNode<T>[] = []; 
    queue.push(this.root);
  
    while (queue.length > 0) {
      const currentNode = queue.shift()!;
  
      result.push(currentNode.value);
  
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
  
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  
    return result;
  }
    }

    const newTree = new BinaryTree<number>();
newTree.root = new TreeNode(1);
newTree.root.left = new TreeNode(2);
newTree.root.right = new TreeNode(3);
newTree.root.left.left = new TreeNode(4);
newTree.root.left.right= new TreeNode(5);
newTree.root.right.left = new TreeNode(6);
newTree.root.right.right = new TreeNode(7);



console.log(newTree.traverse());
