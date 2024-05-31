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
  
  function inOrder<T>(node: TreeNode<T> | null): T[] {
    if (node === null) {
      return [];
    }
  
    const output: T[] = [];
    output.push(...inOrder(node.left));
    output.push(node.value);
    output.push(...inOrder(node.right));
  
    return output;
  }
  
  const root = new TreeNode<number>(1);
  root.left = new TreeNode<number>(2);
  root.right = new TreeNode<number>(3);
  root.left.left = new TreeNode<number>(4);
  root.left.right = new TreeNode<number>(5);
  
  const result = inOrder(root);
  console.log(result);  
  