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
  insert(value: T): void {
    const newNode = new TreeNode<T>(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

levelOrderTraversal() : T[] {
  const result: T[] = [];
  const queue: TreeNode<T>[] = [];

  if (this.root) {
    queue.push(this.root);
  }
  while (queue.length > 0) {
    const currentNode = queue.shift()!; 
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left); 
    }

    if (currentNode.right) {
      queue.push(currentNode.right); 
    }
  }

  return result;
}

inorderTraversal(): T[] {
  const result: T[] = [];
  const stack: TreeNode<T>[] = [];
  let currentNode = this.root;

  while (currentNode || stack.length > 0) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop()!;
    result.push(currentNode.value);
    currentNode = currentNode.right;
  }
  return result;
}

preorderTraversal(): T[] {
  const result: T[] = [];
  const stack: TreeNode<T>[] = [];
  if (this.root) {
    stack.push(this.root);
  }
  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    result.push(currentNode.value);

    if (currentNode.right) {
      stack.push(currentNode.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }
  return result;
}

postorderTraversal(): T[] {
  const result: T[] = [];
  const stack: TreeNode<T>[] = [];
  let lastVisitedNode: TreeNode<T> | null = null
  let currentNode = this.root
  while(currentNode || stack.length > 0){
    while(currentNode){
      stack.push(currentNode)
      currentNode = currentNode.left
    }
    const peek = stack[stack.length - 1];
    if(peek.right && peek.right !== lastVisitedNode){
      currentNode = peek.right;
    }else{
      result.push(peek.value)
      lastVisitedNode = stack.pop()!
    }
  }
  return result;
}
}


const tree = new BinaryTree<string>();
tree.insert("A");
tree.insert("B");
tree.insert("C");
tree.insert("D");
tree.insert("E");
tree.insert("F");
tree.insert("G");

console.log("Levelorder Traversal:", tree.levelOrderTraversal());
console.log("Inorder Traversal:", tree.inorderTraversal());
console.log("Preorder Traversal:", tree.preorderTraversal());
console.log("Postorder Traversal:", tree.postorderTraversal());