/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

class TreeNode<T> {
  data: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;

  constructor(data: T) {
      this.data = data;
  }
}

class Tree<T> {
  root?: TreeNode<T>;
  

  traversal() {
      if (!this.root) return [];
      
      const queue: TreeNode<T>[] = [this.root];
      const traversal: T[] = [];

      while (queue.length > 0) {
          const node: TreeNode<T> = queue.shift();
          traversal.push(node.data);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }

      return traversal;
  }

  dfsPreOrder(node: TreeNode<T>): T[] {
    const output: T[] = [];
    if (!node) return output;
    output.push(node?.data!);
    output.push(...this.dfsPreOrder(node!.left)); 
    output.push(...this.dfsPreOrder(node!.right));

    return output;
  }

  dfsInOrder(node: TreeNode<T>): T[] {
    const output: T[] = [];
    if (!node) return output;
   
    output.push(...this.dfsInOrder(node!.left));
    output.push(node?.data!); 
    output.push(...this.dfsInOrder(node!.right));

    return output;
  }

  dfsPostOrder(node: TreeNode<T>): T[] {
    const output: T[] = [];
    if (!node) return output;
    
    output.push(...this.dfsPostOrder(node!.left)); 
    output.push(...this.dfsPostOrder(node!.right));
    output.push(node?.data!);
    return output;
  }

  // Assignment: Implement the 3 different order in your own ways

  dfsPreOrderMine(): T[] {
    const output: T[] = [];
    
    const traverse = (node?: TreeNode<T>) => {
      if (!node) {
        return;
      }

      output.push(node.data);
      traverse(node.left);
      traverse(node.right);

    }

    traverse(this.root);
    return output;
  }


  dfsInOrderMine(): T[] {
    const output: T[] = [];
    
    const traverse = (node?: TreeNode<T>) => {
      if (!node) {
        return;
      }

      traverse(node.left);
      output.push(node.data);
      traverse(node.right);

    }

    traverse(this.root);
    return output;
  }

  dfsPostOrderMine(): T[] {
    const output: T[] = [];
    
    const traverse = (node?: TreeNode<T>) => {
      if (!node) {
        return;
      }

      traverse(node.left);
      traverse(node.right);
      output.push(node.data);

    }

    traverse(this.root);
    return output;
  }

  

}



const tree = new Tree<number>();
tree.root = new TreeNode<number>(1);
tree.root.left = new TreeNode<number>(2);
tree.root.right = new TreeNode<number>(3);
tree.root.left.left = new TreeNode<number>(4);
tree.root.left.right = new TreeNode<number>(5);
tree.root.left.left.left = new TreeNode<number>(7);
tree.root.left.left.right = new TreeNode<number>(11);
tree.root.right.left = new TreeNode<number>(9);
tree.root.right.right = new TreeNode<number>(18);
tree.root.right.right.left = new TreeNode<number>(19);
tree.root.right.right.right = new TreeNode<number>(21);

console.log(tree.traversal());
console.log(tree.dfsPreOrder(tree.root));
console.log(tree.dfsPreOrderMine());
console.log(tree.dfsInOrder(tree.root));
console.log(tree.dfsInOrderMine());
console.log(tree.dfsPostOrder(tree.root));
console.log(tree.dfsPostOrderMine());