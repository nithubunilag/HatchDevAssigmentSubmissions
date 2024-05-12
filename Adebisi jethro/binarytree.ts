class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.left = null;
      this.right = null;
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
  
      let queue: TreeNode<T>[] = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        let curr = queue.shift();
  
        if (curr!.left === null) {
          curr!.left = newNode;
          return;
        } else if (curr!.right === null) {
          curr!.right = newNode;
          return;
        } else {
          queue.push(curr!.left);
          queue.push(curr!.right);
        }
      }
    }
  
    // Search for a value in the tree
    search(value: T): boolean {
      if (!this.root) {
        return false;
      }
  
      let queue: TreeNode<T>[] = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        let curr = queue.shift();
  
        if (curr!.value === value) {
          return true;
        }
  
        if (curr!.left) {
          queue.push(curr!.left);
        }
        if (curr!.right) {
          queue.push(curr!.right);
        }
      }
  
      return false;
    }
  
    // Breadth-First Search (BFS) traversal
    bfsTraversal(): void {
      if (!this.root) {
        console.log("Tree is empty!");
        return;
      }
  
      let queue: TreeNode<T>[] = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        let curr = queue.shift();
        console.log(curr!.value);  // Visit the node
  
        if (curr!.left) {
          queue.push(curr!.left);
        }
        if (curr!.right) {
          queue.push(curr!.right);
        }
      }
    }
  
    // Depth-First Search (DFS) traversal (pre-order by default)
    dfsTraversal(type: "pre" | "in" | "post" = "pre"): void {
      if (!this.root) {
        console.log("Tree is empty!");
        return;
      }
  
      const traverse = (node: TreeNode<T> | null, type: "pre" | "in" | "post") => {
        if (node) {
          if (type === "pre") {
            console.log(node.value);  // Pre-order visit
          }
          traverse(node.left, type);
          if (type === "in") {
            console.log(node.value);  // In-order visit
          }
          traverse(node.right, type);
          if (type === "post") {
            console.log(node.value);  // Post-order visit
          }
        }
      };
  
      traverse(this.root, type);
    }
  }
  