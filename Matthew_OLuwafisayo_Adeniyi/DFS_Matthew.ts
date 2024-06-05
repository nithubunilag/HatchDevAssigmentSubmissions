//Name: Matthew Oluwafisayo Adeniyi
//Email: matthewgodsent@gamil.com

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
  
  function preOrder<T>(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node === null) {
      return result;
    }
    result.push(node.value);
    preOrder(node.left, result);
    preOrder(node.right, result);
    return result;
  }
  
  function inOrder<T>(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node === null) {
      return result;
    }
    inOrder(node.left, result);
    result.push(node.value);
    inOrder(node.right, result);
    return result;
  }
  
  function postOrder<T>(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node === null) {
      return result;
    }
    postOrder(node.left, result);
    postOrder(node.right, result);
    result.push(node.value);
    return result;
  }
  
  const root = new TreeNode<number>(1);
  root.left = new TreeNode<number>(2);
  root.right = new TreeNode<number>(3);
  root.left.left = new TreeNode<number>(4);
  root.left.right = new TreeNode<number>(5);
  
  const preorderResult = preOrder(root);
  console.log('Preorder:', preorderResult); 
  
  const inorderResult = inOrder(root);
  console.log('Inorder:', inorderResult); 
  
  const postorderResult = postOrder(root);
  console.log('Postorder:', postorderResult); 
  