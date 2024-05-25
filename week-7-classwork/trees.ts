class TreeNode {
    data: string;
    left: TreeNode | null;
    right: TreeNode | null;
  
    constructor(data: string) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class TransverseTree {
    queue: TreeNode[] = [];
    list: string[] = [];
  
    constructor() {
      const root: TreeNode = new TreeNode('R');
      const nodeA: TreeNode = new TreeNode('A');
      const nodeB: TreeNode = new TreeNode('B');
      const nodeC: TreeNode = new TreeNode('C');
      const nodeD: TreeNode = new TreeNode('D');
      const nodeE: TreeNode = new TreeNode('E');
  
      // Connecting nodes
      root.left = nodeA;
      root.right = nodeB;
      nodeA.left = nodeC;
      nodeA.right = nodeD;
      nodeB.left = nodeE;
  
      // Enqueue root node
      this.enqueueQueue(root);
  
      // Perform level-order traversal
      while (this.queue.length > 0) {
        const current: TreeNode | undefined = this.queue.shift();
        if (current) {
          this.enqueueList(current.data);
          if (current.left) this.enqueueQueue(current.left);
          if (current.right) this.enqueueQueue(current.right);
        }
      }
    }
  
    enqueueQueue(node: TreeNode) {
      this.queue.push(node);
    }
  
    enqueueList(val: string) {
      this.list.push(val);
    }
  
    printList() {
      console.log(this.list);
    }
  }
  
  const queue = new TransverseTree();
  queue.printList(); 