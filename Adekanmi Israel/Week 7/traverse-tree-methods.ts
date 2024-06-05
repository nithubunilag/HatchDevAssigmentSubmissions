class TreeNode<T> {
    data: T;
    leftNode: TreeNode<T> | null;
    rightNode: TreeNode<T> | null;
  
    constructor(value: T) {
      this.data = value;
      this.leftNode = null;
      this.rightNode = null;
    }
  }
  
  class BinaryTree<T> {
    root: TreeNode<T> | null;
  
    constructor() {
      this.root = null;
    }
  
    insert(value: T) {
      const newNode = new TreeNode(value);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      // let currentRoot = this.root;
  
      let queue: TreeNode<T>[] = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        let curr = queue.shift();
  
        if (curr!.leftNode === null) {
          curr!.leftNode = newNode;
          return;
        } else if (curr!.rightNode === null) {
          curr!.rightNode = newNode;
          return;
        } else {
          queue.push(curr!.leftNode);
          queue.push(curr!.rightNode);
        }
      }
    }
  
    tranverse() {
      if (!this.root) {
        return [];
      }
  
      const queue: TreeNode<T>[] = [];
      const transOutput: T[] = [];
  
      let currentNode = this.root;
  
      queue.push(currentNode);
      while (queue.length > 0) {
        transOutput.push(queue[0].data);
        if (queue[0].leftNode !== null) {
          queue.push(queue[0].leftNode);
        }
        if (queue[0].rightNode !== null) {
          queue.push(queue[0].rightNode);
        }
  
        queue.splice(0, 1);
      }
      return transOutput;
  
      //   while (queue.length > 0) {
      //     let currentNode = queue.shift()!;  // Dequeue the front node
  
      //     transOutput.push(currentNode.data);  // Process the current node
  
      //     if (currentNode.leftNode !== null) {  // Enqueue left child
      //       queue.push(currentNode.leftNode);
      //     }
      //     if (currentNode.rightNode !== null) {  // Enqueue right child
      //       queue.push(currentNode.rightNode);
      //     }
      //   }
  
      //   return transOutput;
    }
  
    preOrderTraverse() {
      // if (!this.root) {
      //   return [];
      // }
  
      // let stack: TreeNode<T>[] = [];
      // let output: T[] = [];
  
      // output.push(this.root.data);
      // stack.push(this.root);
      // let currentNode = this.root;
  
      // while (currentNode.leftNode !== null) {
      //   output.push(currentNode.leftNode.data);
      //   stack.push(currentNode.leftNode);
      //   currentNode = currentNode.leftNode;
      // }
  
      // while (stack.length > 1) {
      //   let secondToLast = stack.length - 1;
      //   if (stack[secondToLast].rightNode !== null) {
      //     output.push(stack[secondToLast]?.rightNode?.data!);
      //   } else {
      //     stack.pop();
      //   }
      // }
  
      if (!this.root) {
        return [];
      }
  
      const stack: TreeNode<T>[] = [];
      const output: T[] = [];
  
      stack.push(this.root);
  
      while (stack.length > 0) {
        const currentNode = stack.pop()!;
        output.push(currentNode.data);
  
        // Push right child first so that left is processed first
        if (currentNode.rightNode) {
          stack.push(currentNode.rightNode);
        }
        if (currentNode.leftNode) {
          stack.push(currentNode.leftNode);
        }
      }
  
      return output;
    }
  
    inOrderIterative(): T[] {
        const stack: TreeNode<T>[] = [];
        const output: T[] = [];
        let currentNode = this.root;
    
        while (currentNode !== null || stack.length > 0) {
          while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.leftNode;
          }
          currentNode = stack.pop()!;
          output.push(currentNode.data);
          currentNode = currentNode.rightNode;
        }
    
        return output;
      }
    
      postOrderIterative(): T[] {
        if (!this.root) {
          return [];
        }
    
        const stack1: TreeNode<T>[] = [this.root];
        const stack2: TreeNode<T>[] = [];
        const output: T[] = [];
    
        while (stack1.length > 0) {
          const node = stack1.pop()!;
          stack2.push(node);
    
          if (node.leftNode) {
            stack1.push(node.leftNode);
          }
          if (node.rightNode) {
            stack1.push(node.rightNode);
          }
        }
    
        while (stack2.length > 0) {
          output.push(stack2.pop()!.data);
        }
    
        return output;
      }
    
  }
  
  const newTree = new BinaryTree<number>();
  newTree.root = new TreeNode(1);
  newTree.root.leftNode = new TreeNode(5);
  newTree.root.rightNode = new TreeNode(3);
  newTree.root.leftNode.leftNode = new TreeNode(4);
  newTree.root.leftNode.rightNode = new TreeNode(2);
  
  console.log("Level-order traversal:", newTree.tranverse());
  console.log("Iterative pre-order traversal:", newTree.preOrderTraverse());
  console.log("Iterative in-order traversal:", newTree.inOrderIterative());
  console.log("Iterative post-order traversal:", newTree.postOrderIterative());
  
  //The tree structure:
  //       1
  //     /   \
  //    5      3
  //   /  \
  //  4    2
  