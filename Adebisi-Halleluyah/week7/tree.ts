interface BinaryTreeNode<T> {
    value: T;
    left?: BinaryTreeNode<T>; 
    right?: BinaryTreeNode<T>; 
  }
  
  class BinaryTreeNodeImpl<T> implements BinaryTreeNode<T> {
    constructor(public value: T) {}
  
    left?: BinaryTreeNode<T>;
    right?: BinaryTreeNode<T>;
  }
  
  
  const root = new BinaryTreeNodeImpl(10);
  const leftChild = new BinaryTreeNodeImpl(5);
  const rightChild = new BinaryTreeNodeImpl(15);
  root.left = leftChild;
  root.right = rightChild;