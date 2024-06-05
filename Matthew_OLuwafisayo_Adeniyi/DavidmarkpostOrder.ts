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
  
  function postOrder<T>(node: TreeNode<T> | null): T[] {
    if (node === null) {
      return [];
    }
  
    const output: T[] = [];
    output.push(...postOrder(node.left));
    output.push(...postOrder(node.right));
    output.push(node.value);
  
    return output;
  }
  
  const root = new TreeNode<number>(1);
  root.left = new TreeNode<number>(2);
  root.right = new TreeNode<number>(3);
  root.left.left = new TreeNode<number>(4);
  root.left.right = new TreeNode<number>(5);
  
  const result = postOrder(root);
  console.log(result); 
  