// Name: Faisal Adams
// Email: adamsfaisal2003@gmail.com

class treeNode<T> {
  value: T;
  left: treeNode<T> | null;
  right: treeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binaryTree<T> {
  root: treeNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new treeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      // The while loop is passed in true, it will not run forever because we have return statements inside the loop that will break the loop.
      if (value === current.value) return undefined;
      if (!current.left) {
        current.left = newNode;
        return this;
      }
      current = current.left;

      if (!current.right) {
        current.right = newNode;
        return this;
      }
      current = current.right;
    }
  }

  bfstraverse() {
    const queue: treeNode<T>[] = [];
    const result: T[] = [];
    if (!this.root) return result;
    queue.push(this.root);
    while (queue.length) {
      const current = queue.shift()!; //The exclamation at the end of queue.shift()! tells TypeScript that we know that queue.shift() will never return undefined, so it should not complain about it.
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }

  // preOrder(node: treeNode<T> | null): T[] {
  //   if (!node) return [];

  //   let output: T[] = [];

  //   output.push(node?.value!);
  //   output.push(...this.preOrder(node!.left));
  //   output.push(...this.preOrder(node!.right));

  //   return output;
  // }

  // inOrder(node: treeNode<T> | null): T[] {
  //   if (!node) return [];

  //   let output: T[] = [];

  //   output.push(...this.inOrder(node!.left));
  //   output.push(node?.value!);
  //   output.push(...this.inOrder(node!.right));

  //   return output;
  // }

  //My personal way is to do preOrder traversal using stack
  preOrderStack() {
    const stack: treeNode<T>[] = []; // I create a stack that can store tree nodes.
    const result: T[] = []; // The normal results array to show the result of the traversal.
    if (!this.root) return result; // If there is no root, return an empty array.
    stack.push(this.root); //If there is a root, then it should push into the stack as the first memeber.
    while (stack.length) { // We always want to have the while loop running as far as there is something in the stack, just like how we did for queues in bfstraverse.
      const current = stack.pop()!; // We pop the last element in the stack and assign it to the current variable.
      result.push(current.value); // Then push the popped value into the result.
      if (current.right) stack.push(current.right); // Then push in the right node into the stack. The reason why I am pushing the right value into the stack is first is because in 
                                                    // preOrder traversal, we traverse the left node first before the right node. So we need to push in the right into the stack first before the left
                                                    // so that by the time we loop back again, the left node will be the first to be popped out of the stack.
      if (current.left) stack.push(current.left); // Then pop out the left node
    }
    return result;
  }

  //My personal way is to do inOrder traversal using stack
  inOrderStack() {
    const stack: treeNode<T>[] = []; // I create a stack that can store tree nodes.
    const result: T[] = []; // The normal results array to show the result of the traversal.
    let current = this.root;
    while (stack.length || current) { // Here we are check for if the stack still has values or if the current node is not null. This makes sense because by the time it get to the foremost left
                                      // node, the stack will be empty but the current node will not be null.
      if (current) {                  // If the current node is not null, then push the current node into the stack and then move to the left node.
        stack.push(current);
        current = current.left!;
      } else {                        
        current = stack.pop()!;    // If the current node is null, (happens when it reaches lefter most part of a node), then pop the last element in the stack and assign it to the current variable.
        result.push(current.value); // Then push the popped value into the result.
        current = current.right!; // Then move to the right node.
      }
    }
    return result;
  }

  //My personal way is to do postOrder traversal using stack
  postOrderStack() {
    const stack: treeNode<T>[] = []; // I create a stack that can store tree nodes.
    const result: T[] = []; // The normal results array to show the result of the traversal.
    let current = this.root;
    let lastVisitedNode: treeNode<T> | null = null;
    while (stack.length || current) { // Here we are check for if the stack still has values or if the current node is not null. This makes sense because by the time it get to the foremost left
                                      // node, the stack will be empty but the current node will not be null.
      if (current) {                  // If the current node is not null, then push the current node into the stack and then move to the left node.
        stack.push(current);
        current = current.left!;
      } else {
        let peekNode = stack[stack.length - 1]; // This is to get the last element in the stack without removing it from the stack.
        if (peekNode.right && lastVisitedNode !== peekNode.right) { // If the peekNode has a right node and the lastVisitedNode is not equal to the peekNode's right node, then move to the right node.
          current = peekNode.right;
        } else {
          result.push(peekNode.value); // If the peekNode does not have a right node or the lastVisitedNode is equal to the peekNode's right node, then push the peekNode's value into the result.
          lastVisitedNode = stack.pop()!; // Then pop the last element in the stack and assign it to the lastVisitedNode variable.
        }
      }
    }
    return result;
  }
  
}

const tree = new binaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log(tree);
console.log(tree.bfstraverse());
